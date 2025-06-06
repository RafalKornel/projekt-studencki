"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/database/db";
import { Role } from "@/database/enums";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

export async function logout() {
  console.log("logging out");
  revalidatePath("/");
  await signOut({ redirectTo: "/login" });
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export type UserMinimal = {
  id: number;
  email: string;
  fullname: string;
  role: string;
};

export async function getUsers() {
  const users = await db
    .selectFrom("user")
    .select(["email", "fullname", "id", "role"])
    .execute();

  return users;
}
