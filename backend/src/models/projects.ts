import { DbProjectList } from "@joshnice/types";
import { pool } from "../db/connection";

export async function getProjects(): Promise<DbProjectList | undefined> {
    const connection = await pool.getConnection();
    try {
        const sql = `select * from projects`;
        const [rows] = await connection.execute<DbProjectList[]>(sql);
        return rows[0];
    } catch(error) {
        console.error(error);
        return undefined;
    } finally {
        connection.release();
    }
}