import bcrypt from "bcrypt";
import { Role } from "../enums";

export const users = [
  {
    id: 1,
    email: "admin@example.com",
    fullname: "Admin 1",
    password_hash: bcrypt.hashSync("password", 10),
    role: Role.Administrator,
  },
  {
    id: 2,
    email: "doctor@example.com",
    fullname: "Doctor 1",
    password_hash: bcrypt.hashSync("password", 10),
    role: Role.Doctor,
  },

  {
    id: 3,
    email: "user@example.com",
    fullname: "User 1",
    password_hash: bcrypt.hashSync("password", 10),
    role: Role.User,
  },
];
