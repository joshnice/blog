import { ContentType, PostContent } from "@joshnice/types";

interface PostContentJson {
    content: string;
    type: string;
}

export function postContentJsonToTyped(postContentJson: string): PostContent[] {
    const parsePostContentJson: PostContentJson[] = JSON.parse(postContentJson);
    return parsePostContentJson.map(({ content, type }) => ({ content, type: parseContentType(type) }));
}

function parseContentType(type: string): ContentType {
    switch (type) {
        case "title":
            return ContentType.TITLE;
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

export async function addSignatureToS3Assets(postContent: PostContent[], createSignature: (url: string) => Promise<string>): Promise<PostContent[]> {
    const signedContent: PostContent[] = [];
    for await (const {type, content} of postContent) {
        signedContent.push({
            type,
            content: type === ContentType.IMAGE || type === ContentType.VIDEO ? await createSignature(content) : content
        });
    }

    return signedContent;
}