import { Post, PostContent } from "@joshnice/types";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { getPost } from "../api/api-functions";
import { Fragment } from "react";
import { useCallback } from "react";
import { BlogImageComponent } from "../components/blog-image";
import { Header, Text } from "../components/page-text";
import { LoadingBarComponent } from "../components/loading-bar";
import { PageContainer } from "../components/page-container";
import { BlogCodeComponent } from "../components/blog-code";

export const BlogPostPage = () => {
    const { id } = useParams();

    if (id == null) {
        throw new Error("Id for requested blog is invalid");
    }

    const { data: post, isLoading: isPostLoading } = useQuery<Post>(id, () => getPost(id));

    const createBlogBlock = useCallback((postContent: PostContent) => {
        switch (postContent.type) {
            case "TITLE":
                return <Header>{postContent.content}</Header>
            case "TEXT":
                return <Text>{postContent.content}</Text>
            case "IMAGE":
                return <BlogImageComponent imgUrl={postContent.content} alt={postContent.alt} caption={postContent.caption} />
            case "CODE":
                return <BlogCodeComponent gistUrl={postContent.content} caption={postContent.caption} />
            default:
               throw new Error("Content type was not handled");
        }
    }, []);

    if (isPostLoading || post == null) {
        return <LoadingBarComponent />
    }

    return (
        <PageContainer>
            <div className="flex flex-col justify-start items-center p-2 gap-5">
                {post.content.map((postContent) => (
                    <Fragment key={postContent.id}>
                        {createBlogBlock(postContent)}
                    </Fragment>
                ))}
            </div>
        </PageContainer>
    );
}