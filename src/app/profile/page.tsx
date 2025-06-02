import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <main>
      <h1>Welcome {session.user.name}!</h1>

      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </main>
  );
}
