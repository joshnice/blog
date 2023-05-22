import { ContentType } from "./content-type";

export type PostContent = PostContentText | PostContentTitle | PostContentImage | PostContentVideo | PostContentCode;

interface PostContentBase {
    id: string; 
    type: ContentType;
    content: string;
}

export interface PostContentText extends PostContentBase {
    type: "TEXT";
}

export interface PostContentTitle extends PostContentBase {
    type: "TITLE";
}

export interface PostContentImage extends PostContentBase {
    type: "IMAGE";
    alt: string;
    caption: string;
}

export interface PostContentVideo extends PostContentBase {
    type: "VIDEO";
}

export interface PostContentCode extends PostContentBase {
    type: "CODE";
    caption: string;
}