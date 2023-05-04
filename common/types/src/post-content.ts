import { ContentType } from "./content-type";

export interface PostContent {
    id: string; 
    type: ContentType;
    content: string;
}