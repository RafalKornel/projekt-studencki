"use server";
export type ActionResponse<T extends object = {}> = {
  message: string;
  errors?: Record<string, string[]>;
  inputs?: Record<string, any>;
};
