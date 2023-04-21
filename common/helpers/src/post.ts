import { ContentType } from "@joshnice/types/src/content-type";
import { PostContent } from "@joshnice/types/src/post-content";

export function postContentJsonToTyped(postContentJson: {type: string, content: string}[]): PostContent[] {
    return postContentJson.map(({ content, type }) => ({ content, type: parseContentType(type) }));
}

function parseContentType(type: string): ContentType {
    switch (type) {
        case "text":
            return ContentType.TEXT;
        case "code":
            return ContentType.CODE;
        case "image":
            return ContentType.IMAGE;
        case "video":
            return ContentType.VIDEO;
        default:
            throw new Error(`${type} was not handled`);
    }

}