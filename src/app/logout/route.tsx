import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await signOut({ redirectTo: "/" });

  revalidatePath("/");

  return Response.redirect(new URL("/", request.nextUrl));
}
