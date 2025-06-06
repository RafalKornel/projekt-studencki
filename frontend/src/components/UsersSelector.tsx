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
import { Role } from "@/database/enums";
import { UserMinimal } from "@/lib/actions";

type Props = {
  name: string;
  label?: string;
  role?: Role;
  defaultValue?: string;
  errors?: string[];
  users: UserMinimal[];
};

export function UsersSelector({
  name,
  label,
  role,
  errors,
  defaultValue,
  users,
}: Props) {
  const filteredUsers = role ? users.filter((u) => u.role === role) : users;

  return (
    <FormItem>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Services</SelectLabel>
            {filteredUsers.map((s) => (
              <SelectItem value={String(s.id)}>{s.fullname}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage errors={errors} />
    </FormItem>
  );
}
