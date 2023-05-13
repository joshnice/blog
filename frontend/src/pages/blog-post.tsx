import { ContentType, Post, PostContent } from "@joshnice/types";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { getPost } from "../api/api-functions";
import { Fragment } from "react";
import { useCallback } from "react";
import { BlogTextComponent } from "../components/blog-text";
import { BlogImageComponent } from "../components/blog-image";
import { PageTitleComponent } from "../components/page-title";

export const BlogPostPage = () => {
    const { id } = useParams();

    if (id == null) {
        throw new Error("Id for requested blog is invalid");
    }

    const { data: post, isLoading: isPostLoading } = useQuery<Post>(id, () => getPost(id));

    const createBlogBlock = useCallback((postContent: PostContent) => {
        switch (postContent.type) {
            case "TITLE":
                return <PageTitleComponent title={postContent.content} />
            case "TEXT":
                return <BlogTextComponent text={postContent.content} />
            case "IMAGE":
                return <BlogImageComponent imgUrl={postContent.content} alt={postContent.alt} caption={postContent.caption} />
            default:
               throw new Error("Content type was not handled");
        }
    }, []);

    if (isPostLoading || post == null) {
        return <div>loading...</div>
    }

    return (
        <div className="flex flex-col justify-start items-center w-1/2 p-2 gap-5">
            {post.content.map((postContent) => (
                <Fragment key={id}>
                    {createBlogBlock(postContent)}
                </Fragment>
            ))}
        </div>
    );
}