import { createConnection } from "mysql";
import dotenv from "dotenv";

dotenv.config();
console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
export const connection = createConnection(process.env.DATABASE_URL ?? "");

