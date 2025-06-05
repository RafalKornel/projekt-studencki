"use client";

import { Button, buttonVariants } from "@/components/ui/button";
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
import { ReactNode, useActionState } from "react";
import { ActionResponse } from "@/app/test/ActionResponse";
import { VariantProps } from "class-variance-authority";

type Props<T extends Object> = {
  title: string;
  description?: string;
  buttonContent: ReactNode;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
  renderForm: (state: ActionResponse<T>) => ReactNode;
  action: (
    response: ActionResponse,
    form: FormData
  ) => Promise<ActionResponse<T>>;
  initialState?: ActionResponse<T>;
};

export function SiderForm<T extends Object>({
  action: propsAction,
  initialState = { message: "" },
  title,
  description,
  renderForm,
  buttonContent,
  buttonVariant,
}: Props<T>) {
  const [state, action, isPending] = useActionState(propsAction, initialState);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={buttonVariant} className="hover:cursor-pointer">
          {buttonContent}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <form action={action} className="px-4 flex flex-col gap-4">
          {renderForm(state)}

          <SheetFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Loading..." : "Submit"}
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
