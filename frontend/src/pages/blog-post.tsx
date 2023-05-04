import { ContentType, Post } from "@joshnice/types";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { getPost } from "../api/api-functions";
import { Fragment } from "react";
import { useCallback } from "react";
import { BlogTitleComponent } from "../components/blog-title";
import { BlogTextComponent } from "../components/blog-text";
import { BlogImageComponent } from "../components/blog-image";

export const BlogPostPage = () => {
    const { id } = useParams();

    if (id == null) {
        throw new Error("Id for requested blog is invalid");
    }

    const { data: post, isLoading: isPostLoading } = useQuery<Post>(id, () => getPost(id));

    console.log("res", post);

    if (isPostLoading || post == null) {
        return <div>loading...</div>
    }

    const createBlogBlock = useCallback((type: ContentType, content: string) => {
        switch (type) {
            case ContentType.TITLE:
                return <BlogTitleComponent title={content} />
            case ContentType.TEXT:
                return <BlogTextComponent text={content} />
            case ContentType.IMAGE:
                return <BlogImageComponent imgUrl={content} alt="add alt" />
            default:
               throw new Error("Content type was not handled");
        }
    }, []);

    console.log("post.postContent", post.content);

    return (
        <div>
            {post.content.map(({content, type, id}) => (
                <Fragment key={id}>
                    {createBlogBlock(type, content)}
                </Fragment>
            ))}
        </div>
    );
}