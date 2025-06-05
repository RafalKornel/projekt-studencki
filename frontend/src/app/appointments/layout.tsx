import { auth } from "@/auth";
import { PropsWithChildren } from "react";

export default async function AppointmentsLayout({
  children,
}: PropsWithChildren<{}>) {
  const session = await auth();

  return <main>{}</main>;
}
