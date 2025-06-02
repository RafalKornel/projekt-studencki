import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { db } from "./database/db";
import { z } from "zod";

import bcrypt from "bcrypt";
import { Role } from "./database/enums";
import { revalidatePath } from "next/cache";

async function getUser(email: string) {
  return await db
    .selectFrom("user")
    .selectAll()
    .where("email", "=", email)
    .executeTakeFirst();
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const userSchema = z.object({
          email: z.string().email(),
          password: z.string().min(6),
        });

        const parsedCredentials = userSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        const user = await getUser(email);

        if (!user) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(
          password,
          user.password_hash
        );

        if (passwordsMatch) {
          revalidatePath("/");
          return {
            email: user.email,
            id: String(user.id),
            name: user.fullname,
            role: user.role as Role,
          };
        }

        return null;
      },
    }),
  ],
});
