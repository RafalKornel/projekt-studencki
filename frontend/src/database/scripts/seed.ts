import { db } from "../db";
import { users } from "../seeds/users";

async function seed() {
  await db.insertInto("user").values(users).execute();
}

seed();
