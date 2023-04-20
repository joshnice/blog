import { PostType } from "./post-type";

export interface PostContent { 
    type: PostType;
    content: string;
}