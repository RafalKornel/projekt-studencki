import { Role } from "./database/enums";

export type User = {
  id: number;
  email: string;
  fullname: string;
  role: Role;
};

export type ServiceType = {
  id: number;
  name: string;
  description: string;
  duration: number;
};

export type AppointmentType = {
  id: number;
  patient: User;
  doctor: User;
  service: ServiceType;
  startTime: Date;
  endTime: Date;
  status: string;
  reservationDate: Date;
  confirmationDate?: Date | null;
  completionDate?: Date | null;
  cancellationDate?: Date | null;
};
