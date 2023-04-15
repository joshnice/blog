import { connection } from "../db/connection";

export async function getPost(postId: string) {

    return new Promise((resolve) => {
        connection.connect();
        const sql = "select * from posts where id = ?";
    
        connection.query(sql, [postId], (error, result) => {
            if (error) {
                throw new Error(error.message);
            }
            connection.end();
            resolve(result);
        });
    });
}