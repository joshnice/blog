import { PostContent } from "./post-content";

export interface Post {
    id: string;
    title: string;
    content: PostContent[];
    firstName: string;
    lastName: string;
    thumbnailUrl: string;
    date: Date;
}