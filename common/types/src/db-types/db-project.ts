import { RowDataPacket } from "mysql2";

export type ProjectsDb = { project_json: string } & RowDataPacket;