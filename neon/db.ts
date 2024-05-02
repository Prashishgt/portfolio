import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const neonDB = drizzle(sql);
console.log(neonDB, "db connection");

export { neonDB };
