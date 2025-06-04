"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { testAction } from "./testAction";
import { ActionResponse } from "./ActionResponse";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const initialState: ActionResponse = { message: "" };

export function InputForm() {
  const [state, action, isPending] = useActionState(testAction, initialState);

  return (
    <form action={action} className="w-2/3 space-y-6">
      <FormItem>
        <FormLabel htmlFor={"username"}>First name</FormLabel>
        <Input
          placeholder="Jan Kowalski"
          name={"username"}
          id={"username"}
          required
          minLength={3}
          maxLength={10}
          defaultValue={state.inputs?.username}
        />
        <FormDescription>Your first birthname.</FormDescription>
        <FormMessage errors={state.errors?.username} />
      </FormItem>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
}
