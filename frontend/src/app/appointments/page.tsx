import { auth } from "@/auth";
import { Role } from "@/database/enums";
import { redirect } from "next/navigation";
import { getAppointments } from "./actions";
import { AppointmentsTable } from "./components/AppointmentsTable";
import { RequestAppointmentSider } from "./components/RequestAppointmentSider";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/Calendar";

export default async function AppointmentsPage() {
  const session = await auth();

  if (!session?.user.role) {
    return redirect("/");
  }

  const appointments = await getAppointments(session.user);

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl">Appointments page</h1>
        {session.user.role === Role.User && <RequestAppointmentSider />}
      </div>

      <Separator />

      <AppointmentsTable appointments={appointments} role={session.user.role} />

      <Separator />

      <Calendar events={appointments} />
    </main>
  );
}
