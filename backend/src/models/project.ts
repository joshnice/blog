import { ProjectsDb } from "@joshnice/types";
import { pool } from "../db/connection";

export async function getProject(projectId: string): Promise<ProjectsDb | undefined> {
    const connection = await pool.getConnection();
    try {
        const sql = `select project_json from projects where id = ?`;
        const [rows] = await connection.execute<ProjectsDb[]>(sql, [projectId]);
        return rows[0];
    } catch(error) {
        console.error(error);
        return undefined;
    } finally {
        connection.release();
    }
}