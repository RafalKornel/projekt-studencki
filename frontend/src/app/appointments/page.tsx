import { auth } from "@/auth";
import { Role } from "@/database/enums";
import { redirect } from "next/navigation";
import { AdminAppointmentsPage } from "./pages/AdminPage";
import { DoctorAppointmentsPage } from "./pages/DoctorPage";
import { UserAppointmentsPage } from "./pages/UserPage";
import { getAppointments } from "./actions";
import { AppointmentsTable } from "./components/AppointmentsTable";

export default async function AppointmentsPage() {
  const session = await auth();

  if (!session?.user.role) {
    return redirect("/");
  }

  const appointments = await getAppointments(session.user);

  return <AppointmentsTable appointments={appointments} renderActions={(a) => a.id} />

  // switch(session.user.role) {
  //   case Role.Administrator:
  //     return <AdminAppointmentsPage user={session.user} />;
  //   case Role.Doctor:
  //     return <DoctorAppointmentsPage />;
  //   case Role.User:
  //     return <UserAppointmentsPage />;
  //   defualt: return null;
  // }
}
