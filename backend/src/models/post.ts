import { pool } from "../db/connection";

export async function getPost(postId: string) {
    const connection = await pool.getConnection();
    try {
        const sql = "select * from posts where id = ?";
        const [rows] = await connection.execute(sql, [postId]);
        return rows;    
    } catch(error) {
        console.error(error);
    } finally {
        connection.release();
    }
}