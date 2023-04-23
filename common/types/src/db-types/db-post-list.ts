import { RowDataPacket } from "mysql2";

export interface DbPostList extends RowDataPacket {
    id: string;
    title: string;
    thumbnail_url: string;
}