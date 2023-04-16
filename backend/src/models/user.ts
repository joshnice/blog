import { pool } from "../db/connection";

export async function getUsers() {
    const connection = await pool.getConnection();
    try {
        const sql = "select * from users limit 3"
        const [users] = await connection.execute(sql);
        return users;
    } catch (err) {
        console.error(err);
    } finally {
        connection.release();
    }
}