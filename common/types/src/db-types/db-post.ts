import { RowDataPacket } from "mysql2";

export interface DbPost extends RowDataPacket {
    id: string;
    title: string;
	first_name: string;
	last_name: string;
	post_url: string;
	thumbnail_url: string;
}