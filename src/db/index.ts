// "use server";

// import { drizzle } from 'drizzle-orm/libsql';
// import { Database } from 'bun:sqlite';

// const sqlite = new Database(process.env.DB_FILE_NAME!);
// export const db = drizzle({ client: sqlite });

import { drizzle , type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
// import process from 'node:process'

// Load the environment variables from the .env file
process.loadEnvFile()

console.log(process.env.DB_FILE_NAME)

const sqlite = new Database(process.env.DB_FILE_NAME);
// export const db = drizzle({ client: sqlite });
export const db = {}