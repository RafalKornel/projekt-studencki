

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
import { AppointmentType, ServiceType } from "@/types";
import { ReactNode } from "react";

type Props = {
  appointments: AppointmentType[];
  className?: string;
  renderActions: (appointment: AppointmentType) => ReactNode;
};

export function AppointmentsTable({ appointments , renderActions}: Props) {
  return (
    <div className="border-2 border-slate-700 p-4">
      <Table>
        <TableCaption>
          A list of appointments.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Start date</TableHead>
            <TableHead>Duration [minutes]</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">{appointment.service.name}</TableCell>
              <TableCell>{appointment.id}</TableCell>
              <TableCell>{appointment.startTime.toLocaleString()}</TableCell>
              <TableCell>{appointment.service.duration}</TableCell>
              <TableCell>{appointment.status}</TableCell>
              <TableCell>{renderActions(appointment)}</TableCell>
              {/* <TableCell className="text-center">
                <EditServiceSider service={service} />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">{appointments.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
