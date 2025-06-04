"use server";

import z from "zod";
import { ActionResponse } from "./ActionResponse";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export async function testAction(
  _: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const data = {
    username: formData.get("username")?.valueOf(),
  };

  const parsedData = await FormSchema.safeParseAsync(data);

  console.log(JSON.stringify(parsedData));

  return {
    message: parsedData.success ? "ok" : "failed",
    errors: parsedData.error?.flatten().fieldErrors,
    inputs: data,
  };
}
