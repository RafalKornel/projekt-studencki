"use client";

import { Input } from "@/components/ui/input";
import { editService } from "../actions";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ServiceType } from "@/types";
import { SiderForm } from "@/components/SiderForm";
import { PenBoxIcon } from "lucide-react";

type Props = {
  service: ServiceType;
};

export function EditServiceSider({ service }: Props) {
  return (
    <SiderForm
      title="Edit existing service"
      description="Provide all details and submit."
      action={editService}
      initialState={{
        message: "",
        inputs: service,
      }}
      buttonContent={<PenBoxIcon />}
      renderForm={(state) => (
        <>
          <input name="id" id="id" value={service.id} hidden />

          <FormItem>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              placeholder="Check up"
              name="name"
              id="name"
              type="text"
              required
              minLength={3}
              defaultValue={state.inputs?.name}
            />
            <FormMessage errors={state.errors?.name} />
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="duration">Duration</FormLabel>
            <Input
              placeholder="15"
              name="duration"
              id="duration"
              type="number"
              required
              min={5}
              max={8 * 60}
              defaultValue={state.inputs?.duration}
            />
            <FormMessage errors={state.errors?.duration} />
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              placeholder="Regular check up"
              name="description"
              id="description"
              required
              defaultValue={state.inputs?.description}
            />
            <FormMessage errors={state.errors?.description} />
          </FormItem>
        </>
      )}
    />
  );
}
