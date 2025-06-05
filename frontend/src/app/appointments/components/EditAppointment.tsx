"use client";

import { SiderForm } from "@/components/SiderForm";
import { AppointmentType } from "@/types";
import { PenBoxIcon } from "lucide-react";
import { editAppointment } from "../actions";

type Props = {
  appointment: AppointmentType;
};

export function EditAppointmentSider({ appointment }: Props) {
  return (
    <SiderForm
      action={editAppointment}
      buttonContent={<PenBoxIcon />}
      title="Edit appointment"
      description="Make adjustments to the appointment"
      initialState={{ message: "", inputs: appointment }}
      renderForm={() => {
        return null;
      }}
    />
  );
}
