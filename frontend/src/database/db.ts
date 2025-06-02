import Sqlite3Database from "better-sqlite3";
import { Pool } from "pg";

import {
  FileMigrationProvider,
  Kysely,
  Migrator,
  SqliteDialect,
  PostgresDialect,
} from "kysely";
import * as path from "path";
import { promises as fs } from "fs";

import type { DB } from "./types";

export type Database = DB;

const type = process.env.DATABASE_TYPE;

const dialect =
  type === "postgres"
    ? new PostgresDialect({
        pool: new Pool({ connectionString: process.env.DATABASE_URL }),
      })
    : new SqliteDialect({
        database: new Sqlite3Database(process.env.DATABASE_URL || "db.sqlite"),
      });

export const db = new Kysely<Database>({ dialect });

export const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "./migrations"),
  }),
  allowUnorderedMigrations: true,
});
