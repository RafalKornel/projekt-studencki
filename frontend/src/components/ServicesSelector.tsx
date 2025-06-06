"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ServiceType } from "@/types";

type Props = {
  name: string;
  defaultValue?: string;
  errors?: string[];
  services: ServiceType[];
};

export function ServicesSelector({
  name,
  errors,
  defaultValue,
  services,
}: Props) {
  return (
    <FormItem>
      <FormLabel htmlFor={name}>Service</FormLabel>

      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Services</SelectLabel>
            {services.map((s) => (
              <SelectItem value={String(s.id)}>{s.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage errors={errors} />
    </FormItem>
  );
}
