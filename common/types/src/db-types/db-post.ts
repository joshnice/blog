import { RowDataPacket } from "mysql2";

export interface DbPost extends RowDataPacket {
    id: string;
    title: string;
	author_id: string;
	post_url: string;
	thumbnail_url: string;
}