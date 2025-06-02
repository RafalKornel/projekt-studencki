import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { db } from "./database/db";
import { z } from "zod";

import bcrypt from "bcrypt";

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
          return {
            email: user.email,
            id: String(user.id),
            name: user.fullname,
          };
        }

        return null;
      },
    }),
  ],
});
