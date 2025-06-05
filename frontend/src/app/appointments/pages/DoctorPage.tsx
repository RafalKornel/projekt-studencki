import { User } from "next-auth";

type Props = {
  user: User;
};

export function DoctorAppointmentsPage({ user }: Props) {
  return (
    <main>
      <h1>Doctor appointments page</h1>
    </main>
  );
}
