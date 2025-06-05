import { HoverUserCard } from "@/components/HoverUserCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Role } from "@/database/enums";
import { AppointmentType } from "@/types";
import { EditAppointmentSider } from "./EditAppointment";

type Props = {
  appointments: AppointmentType[];
  role: Role;
  className?: string;
};

export function AppointmentsTable({ appointments, role }: Props) {
  console.log(appointments);
  return (
    <div className="border-2 border-slate-700 p-4">
      <Table>
        <TableCaption>A list of appointments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Start date</TableHead>
            <TableHead>Duration [minutes]</TableHead>
            <TableHead>Status</TableHead>
            {[Role.User, Role.Administrator].includes(role) && (
              <TableHead>Doctor</TableHead>
            )}
            {[Role.Doctor, Role.Administrator].includes(role) && (
              <TableHead>Patient</TableHead>
            )}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">
                {appointment.service.name}
              </TableCell>
              <TableCell>{appointment.id}</TableCell>
              <TableCell>{appointment.startTime.toLocaleString()}</TableCell>
              <TableCell>{appointment.service.duration}</TableCell>
              <TableCell>{appointment.status}</TableCell>
              {[Role.User, Role.Administrator].includes(role) && (
                <TableCell>
                  <HoverUserCard user={appointment.doctor} />
                </TableCell>
              )}
              {[Role.Doctor, Role.Administrator].includes(role) && (
                <TableCell>
                  <HoverUserCard user={appointment.patient} />
                </TableCell>
              )}
              {role === Role.Administrator && (
                <TableCell>
                  <EditAppointmentSider appointment={appointment} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total</TableCell>
            <TableCell className="text-right">{appointments.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
