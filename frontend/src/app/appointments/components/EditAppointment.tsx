"use client";

import * as React from "react";

import { SiderForm } from "@/components/SiderForm";
import { AppointmentType, ServiceType } from "@/types";
import { PenBoxIcon } from "lucide-react";
import { editAppointment } from "../actions";
import { FormItem } from "@/components/ui/form";
import { DateTimePicker } from "@/components/DateTimePicker";
import { UsersSelector } from "@/components/UsersSelector";
import { Role } from "@/database/enums";

import { ServicesSelector } from "@/components/ServicesSelector";
import { User } from "@/database/types";
import { UserMinimal } from "@/lib/actions";

type Props = {
  appointment: AppointmentType;
  services: ServiceType[];
  users: UserMinimal[];
};

export function EditAppointmentSider({ appointment, services, users }: Props) {
  return (
    <SiderForm
      action={editAppointment}
      buttonContent={<PenBoxIcon />}
      title="Edit appointment"
      description="Make adjustments to the appointment"
      initialState={{ message: "", inputs: appointment }}
      renderForm={(state) => (
        <>
          <input name="id" id="id" defaultValue={appointment.id} hidden />

          <ServicesSelector
            name="service"
            errors={state.errors?.service}
            defaultValue={String(appointment.service.id)}
            services={services}
          />

          <UsersSelector
            name="doctor"
            label="Doctor"
            defaultValue={String(appointment.doctor.id)}
            errors={state.errors?.doctor}
            role={Role.Doctor}
            users={users}
          />

          <FormItem>
            <DateTimePicker
              name="datetime"
              defaultValue={appointment.startTime}
            />
          </FormItem>
        </>
      )}
    />
  );
}
