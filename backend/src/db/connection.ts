import dotenv from "dotenv";
import { createPool } from "mysql2/promise";

dotenv.config();

if (process.env.DATABASE_HOST == null || process.env.DATABASE_USER == null || process.env.DATABASE_PASSWORD == null || process.env.DATABASE_NAME == null) {
    throw new Error("Database is missing configuration variables");
}

export const pool = createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true,
    }
})


