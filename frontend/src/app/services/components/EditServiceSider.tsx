"use client";

import { PenBoxIcon } from "lucide-react";
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
import { editService } from "../actions";
import { ActionResponse } from "@/app/test/ActionResponse";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ServiceType } from "@/types";

type Props = {
  service: ServiceType;
};

export function EditServiceSider({ service }: Props) {
  const [state, action, isPending] = useActionState(editService, {
    message: "",
    inputs: service,
  } as ActionResponse);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="size-8 hover:cursor-pointer"
        >
          <PenBoxIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit existing service</SheetTitle>
          <SheetDescription>Provide all details and submit.</SheetDescription>
        </SheetHeader>
        <form action={action} className="px-4 flex flex-col gap-4">
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

          <SheetFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Loading..." : "Save changes"}
            </Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
