import { DbPostList } from "@joshnice/types";
import { pool } from "../db/connection";

export async function getPosts(limit: number): Promise<DbPostList[] | undefined> {

    const connection = await pool.getConnection();
    try {
        const sql = `SELECT posts.id, posts.title, posts.thumbnail_url FROM posts ORDER BY posts.date desc LIMIT ?`;
        const [rows] = await connection.execute<DbPostList[]>(sql, [limit]);
        return rows;
    } catch(error) {
        console.error(error);
        return undefined;
    } finally {
        connection.release();
    
    }
}