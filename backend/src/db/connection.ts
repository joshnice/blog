import { createConnection } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

if (process.env.DATABASE_URL == null) {
    throw new Error("Database url is null and therefore can't connect to database");
}

export const connection = createConnection(process.env.DATABASE_URL);

