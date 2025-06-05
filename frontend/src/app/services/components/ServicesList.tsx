

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
import { ServiceType } from "@/types";
import { EditServiceSider } from "./EditServiceSider";

type Props = {
  services: ServiceType[];
  className?: string;
};

export function ServicesTable({ services }: Props) {
  return (
    <div className="border-2 border-slate-700 p-4">
      <Table>
        <TableCaption>
          A list of medical services available in your facility.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Duration [minutes]</TableHead>
            <TableHead className="text-left">Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.id}</TableCell>
              <TableCell>{service.duration}</TableCell>
              <TableCell className="text-left">{service.description}</TableCell>
              <TableCell className="text-center">
                <EditServiceSider service={service} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
