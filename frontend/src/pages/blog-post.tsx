import { Post } from "@joshnice/types";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { getPost } from "../api/api-functions";

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

    console.log("post.postContent", post.content);

    return (
        <div>
            {post.content.map((content) => (
                <div key={content.id}>{content.content}</div>
            ))}
        </div>
    );
}