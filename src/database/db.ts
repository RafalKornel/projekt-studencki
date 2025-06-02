import Sqlite3Database from "better-sqlite3";
import { FileMigrationProvider, Kysely, Migrator, SqliteDialect } from "kysely";
import * as path from "path";
import { promises as fs } from "fs";

import type { DB } from "./types.d.ts";

export type Database = DB;

const dialect = new SqliteDialect({
  database: new Sqlite3Database("db.sqlite"),
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
