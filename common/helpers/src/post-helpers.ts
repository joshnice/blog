import { ContentType, DbPost, Post, PostContent } from "@joshnice/types";
import { v4 as uuid } from "uuid";

interface PostContentJson {
    content: string;
    type: string;
}

export function postContentJsonToTyped(postContentJson: string): PostContent[] {
    // here
    const parsePostContentJson: PostContentJson[] = JSON.parse(postContentJson);
    return parsePostContentJson.map(({ content, type }) => ({  id: uuid(), content, type: parseContentType(type) }));
}

function parseContentType(type: string): ContentType {
    switch (type) {
        case "title":
            return "TITLE";
        case "text":
            return "TEXT";
        case "code":
            return "CODE";
        case "image":
            return "IMAGE";
        case "video":
            return "VIDEO";
        default:
            throw new Error(`${type} was not handled`);
    }

}

export async function addSignatureToS3Assets(postContent: PostContent[], createSignature: (url: string) => Promise<string>): Promise<PostContent[]> {
    const signedContent: PostContent[] = [];
    for await (const {id, type, content} of postContent) {
        signedContent.push({
            id,
            type,
            content: type === "IMAGE" || type === "VIDEO" ? await createSignature(content) : content
        });
    }

    return signedContent;
}

export function combinePostAndPostContent(post: DbPost, postContent: PostContent[]): Post {
    const { id, title, thumbnail_url, first_name, last_name, date  } = post;
    return {
        id,
        title, 
        thumbnailUrl: thumbnail_url, 
        firstName: first_name,
        lastName: last_name,
        content: postContent,
        date
    }
}