import bcrypt from "bcrypt";

export const users = [
  {
    id: 1,
    email: "admin@example.com",
    fullname: "Admin",
    password_hash: bcrypt.hashSync("password", 10),
  },
  {
    id: 2,
    email: "user@example.com",
    fullname: "User",
    password_hash: bcrypt.hashSync("password", 10),
  },
];
