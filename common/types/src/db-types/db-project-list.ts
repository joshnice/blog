import { RowDataPacket } from "mysql2";
import { ProjectList } from "../project-list";

export type DbProjectList = ProjectList & RowDataPacket; 