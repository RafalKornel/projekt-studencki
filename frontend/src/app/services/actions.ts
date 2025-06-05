"use server";

import { ServiceType } from "@/types";
import { ActionResponse } from "../test/ActionResponse";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const services: ServiceType[] = [
  {
    id: 1,
    name: "Blood collection",
    duration: 15,
    description: "We take your blood sample",
  },
  {
    id: 2,
    name: "Vaccination",
    duration: 30,
    description:
      "Vaccine injection. Makes you'r immune system more resilient to viruses",
  },
  {
    id: 3,
    name: "Check up",
    description: "Most basic medical examination",
    duration: 45,
  },
];

export const getServices = async () => services;

const NewServiceSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name of the service must be at least 3 characters." }),
  duration: z
    .number()
    .min(5, { message: "Duration must be at least 5 minutes" })
    .max(8 * 60, { message: "Duration must be at most 480 minutes (8 hours)" }),
  description: z.string(),
});

export async function addService(_: ActionResponse, form: FormData) {
  const data = {
    name: form.get("name"),
    duration: Number(form.get("duration")),
    description: form.get("description"),
  };

  const parsedData = await NewServiceSchema.safeParseAsync(data);

  if (parsedData.success) {
    const biggestId = Math.max(...services.map((s) => s.id));

    const newService: ServiceType = {
      id: biggestId + 1,
      name: parsedData.data.name,
      duration: parsedData.data.duration,
      description: parsedData.data.description,
    };

    services.push(newService);

    revalidatePath("/services");
  }

  return {
    message: parsedData.success
      ? "Successfully created service"
      : "Failed creating service",
    errors: parsedData.error?.flatten().fieldErrors,
    inputs: data,
  };
}

const EditServiceSchema = z.object({
  ...NewServiceSchema.shape,
  id: z.number(),
});

export async function editService(_: ActionResponse, form: FormData) {
  const data = {
    id: Number(form.get("id")),
    name: form.get("name"),
    duration: Number(form.get("duration")),
    description: form.get("description"),
  };

  const parsedData = await EditServiceSchema.safeParseAsync(data);

  if (parsedData.success) {
    const service = services.find((s) => s.id === parsedData.data.id);

    if (!service) {
      throw new Error("Could not find service.");
    }

    service.name = parsedData.data.name;
    service.duration = parsedData.data.duration;
    service.description = parsedData.data.description;
    revalidatePath("/services");
  }

  return {
    message: parsedData.success
      ? "Successfully edited service"
      : "Failed editing service",
    errors: parsedData.error?.flatten().fieldErrors,
    inputs: data,
  };
}
