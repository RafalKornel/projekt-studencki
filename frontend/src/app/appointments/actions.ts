"use server";

import { Role } from "@/database/enums";
import { AppointmentType } from "@/types";
import { User } from "next-auth";

const appointments: AppointmentType[] = [
  {
    id: 1,
    doctorId: 2,
    patientId: 1,
    startTime: new Date("2025-07-10T12:00:00.0000Z"),
    endTime: new Date("2025-07-10T12:30:00.0000Z"),
    reservationDate: new Date("2025-05-20T15:42:14.1352Z"),
    status: "pending",
    service: {
      id: 2,
      name: "Vaccination",
      duration: 30,
      description:
        "Vaccine injection. Makes you'r immune system more resilient to viruses",
    },
  },
  {
    id: 2,
    doctorId: 2,
    patientId: 1,
    startTime: new Date("2025-07-10T13:00:00.0000Z"),
    endTime: new Date("2025-07-10T13:45:00.0000Z"),
    reservationDate: new Date("2025-05-20T15:42:14.1352Z"),
    status: "pending",
    service: {
      id: 3,
      name: "Check up",
      description: "Most basic medical examination",
      duration: 45,
    },
  },
];

export async function getAppointments(user: User) {
  if (user.role === Role.Administrator) {
    return appointments;
  }

  if (user.role === Role.Doctor) {
    return appointments.filter((a) => a.doctorId === user.id as unknown as number);
  }

  if (user.role === Role.User) {
    return appointments.filter((a) => a.patientId === user.id as unknown as number)
  }

  return [];
}
