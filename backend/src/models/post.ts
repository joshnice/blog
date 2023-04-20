import { DbPost } from "@joshnice/types";
import { pool } from "../db/connection";

export async function getPost(postId: string): Promise<DbPost | undefined> {
    const connection = await pool.getConnection();
    try {
        const sql = "select * from posts where id = ?";
        const [rows] = await connection.execute<DbPost[]>(sql, [postId]);
        return rows[0];    
    } catch(error) {
        console.error(error);
        return undefined;
    } finally {
        connection.release();
    
    }
}