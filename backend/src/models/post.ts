import { DbPost } from "@joshnice/types";
import { pool } from "../db/connection";

export async function getPost(postId: string): Promise<DbPost | undefined> {
    const connection = await pool.getConnection();
    try {
        const sql = `
        SELECT posts.id, posts.title, posts.post_url, posts.thumbnail_url, posts.date, users.first_name, users.last_name  
        FROM posts
        INNER JOIN users ON users.id = posts.author_id
        WHERE posts.id = ?`;
        const [rows] = await connection.execute<DbPost[]>(sql, [postId]);
        return rows[0];
    } catch(error) {
        console.error(error);
        return undefined;
    } finally {
        connection.release();
    
    }
}