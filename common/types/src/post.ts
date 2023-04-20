import { PostContent } from "./post-content";

export interface Post {
    id: string;
    title: string;
    postContent: PostContent[];
    authorId: string;
    thumbnailUrl: string;
}