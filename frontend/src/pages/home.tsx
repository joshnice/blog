import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../api/api-functions";

export const HomePage: FunctionComponent = () => {

    const posts = useQuery("posts", getPosts);

    if (posts.isLoading || posts.data == null) {
        return <p>Is loading...</p>
    }

    return (
        <div className="flex flex-col align-middle w-full">
            <p className="w-1/2 font-semibold text-xl">Home Page here are the posts:</p>
            {posts.data.map((post, index) => (
                <p className="w-1/2" key={post.id}>{`${index} - ${post.title}`}</p>
            ))}
        </div>
    )
}