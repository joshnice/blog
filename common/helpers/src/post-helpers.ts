import { DbPost, Post, PostContent } from "@joshnice/types";
import { v4 as uuid } from "uuid";

interface PostContentJson {
    content: string;
    type: string;
    alt?: string;
    caption?: string;
    language?: string;
}

export function postContentJsonToTyped(postContentJson: string): PostContent[] {
    const parsePostContentJson: PostContentJson[] = JSON.parse(postContentJson);
    return parsePostContentJson.map((json) => parseContentType(json));
}

function parseContentType(json: PostContentJson): PostContent {
    switch (json.type) {
        case "title":
            return { id: uuid(), type: "TITLE", content: json.content };
        case "text":
            return { id: uuid(), type: "TEXT", content: json.content };
        case "code":
            if (json.language == null) {
                throw new Error("Code type was missing language property")
            }
            return { id: uuid(), type: "CODE", content: json.content, language: json.language };
        case "image":
            if (json.alt == null) {
                throw new Error("Code type was missing alt property")
            }
            if (json.caption == null) {
                throw new Error("Code type was missing caption property")
            }
            return { id: uuid(), type: "IMAGE", content: json.content, alt: json.alt, caption: json.caption };
        case "video":
            return { id: uuid(), type: "VIDEO", content: json.content };
        default:
            throw new Error(`${json.type} was not handled`);
    }

}

export async function addSignatureToS3Assets(postContent: PostContent[], createSignature: (url: string) => Promise<string>): Promise<PostContent[]> {
    const signedContent: PostContent[] = [];
    for await (const contentSection of postContent) {
        if (contentSection.type === "IMAGE" || contentSection.type === "VIDEO") {
            signedContent.push({
                ...contentSection,
                content: await createSignature(contentSection.content)
            });
        } else {
            signedContent.push(contentSection);
        }
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