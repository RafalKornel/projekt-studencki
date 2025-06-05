import bcrypt from "bcrypt";
import { Role } from "../enums";

export const ADMIN = {
  id: 1,
  email: "admin@example.com",
  fullname: "Admin 1",
  role: Role.Administrator,
};

export const DOCTOR = {
  id: 2,
  email: "doctor@example.com",
  fullname: "Doctor 1",
  role: Role.Doctor,
};

export const USER = {
  id: 3,
  email: "user@example.com",
  fullname: "User 1",
  role: Role.User,
};

export const users = [
  {
    ...ADMIN,
    password_hash: bcrypt.hashSync("password", 10),
  },
  {
    ...DOCTOR,
    password_hash: bcrypt.hashSync("password", 10),
  },
  {
    ...USER,
    password_hash: bcrypt.hashSync("password", 10),
  },
];
