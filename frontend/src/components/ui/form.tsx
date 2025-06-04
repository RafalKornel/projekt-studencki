"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-item"
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function FormLabel({
  className,
  htmlFor,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <Label
      data-slot="form-label"
      // data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={htmlFor}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="form-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({
  className,
  errors,
  ...props
}: React.ComponentProps<"p"> & { errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return errors.map((e) => (
    <p
      data-slot="form-message"
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {e}
    </p>
  ));
}

export { FormItem, FormLabel, FormDescription, FormMessage };
