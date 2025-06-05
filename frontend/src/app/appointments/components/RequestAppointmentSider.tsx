"use client";

import { SiderForm } from "@/components/SiderForm";
import { requestAppointment } from "../actions";

export function RequestAppointmentSider() {
  return (
    <SiderForm
      action={requestAppointment}
      buttonContent={"Request appointment"}
      buttonVariant='default'
      title="Request new appointment"
      description="Fill out the form and request new appointment"
      renderForm={(state) => <></>}
    />
  );
}
