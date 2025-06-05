"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActionState } from "react";
import { addService } from "../actions";
import { ActionResponse } from "@/app/test/ActionResponse";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SiderForm } from "@/components/SiderForm";

export function NewServiceSider() {
  return (
    <SiderForm
      title="Create new service"
      description="Provide all details and submit."
      action={addService}
      buttonContent="Create service"
      renderForm={(state) => (
        <>
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
            <FormDescription>Name of the new service.</FormDescription>
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
            <FormDescription>Duration in minutes.</FormDescription>
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
            <FormDescription>Description of your new service</FormDescription>
            <FormMessage errors={state.errors?.description} />
          </FormItem>
        </>
      )}
    />
  );
}
