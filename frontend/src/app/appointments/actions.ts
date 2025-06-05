"use server";

import { Role } from "@/database/enums";
import { DOCTOR, USER } from "@/database/seeds/users";
import { AppointmentType } from "@/types";
import { ActionResponse } from "../test/ActionResponse";
import { User } from "next-auth";
import dayjs from "dayjs";

const appointments: AppointmentType[] = [
  {
    id: 1,
    doctor: DOCTOR,
    patient: USER,
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
    doctor: DOCTOR,
    patient: USER,
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
  {
    id: 3,
    doctor: DOCTOR,
    patient: USER,
    startTime: new Date("2025-06-05T12:42:14.1352Z"),
    endTime: new Date("2025-06-05T13:42:14.1352Z"),
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
  console.log(user);

  if (user.role === Role.Administrator) {
    return appointments;
  }

  if (user.role === Role.Doctor) {
    return appointments.filter((a) => String(a.doctor.id) === user.id);
  }

  if (user.role === Role.User) {
    return appointments.filter((a) => String(a.patient.id) === user.id);
  }

  return [];
}
export const requestAppointment = async (
  actionResponse: ActionResponse,
  form: FormData
): Promise<ActionResponse> => {
  "use server";

  return actionResponse;
};
export const editAppointment = async (
  a: ActionResponse
): Promise<ActionResponse> => {
  "use server";
  return a;
};
