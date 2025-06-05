import { auth } from "@/auth";
import { getAppointments } from "../actions";
import { User } from "next-auth";

type Props = {
  user: User;
}

export async function AdminAppointmentsPage({user}: Props) {

  const assignments = await getAppointments(user);
  return (
    <main>
      <h1>Admin appointments page</h1>
    </main>
  );
}
