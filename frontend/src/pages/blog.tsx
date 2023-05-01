import { useQuery } from "react-query";
import { getPosts } from "../api/api-functions";
import { BlogLargePreviewComponent } from "../components/blog-large-preview";
import { BlogSmallPreviewComponent } from "../components/blog-small-preview";

export const BlogPage = () => {
    const { data: posts, isLoading: isPostsLoading } = useQuery("posts", getPosts);

    if (isPostsLoading || posts == null) {
        return <p>Is loading...</p>
    }

    return (
        <div className="flex flex-col items-center justify-start w-2/3 gap-7">
            <h3 className="text-white text-3xl self-start">Latest blog posts</h3>
            <div className="grid items-center justify-items-center grid-cols-2 w-full gap-5">
                {posts.map((post, index) => {
                        if (index === 0) {
                            return (<BlogLargePreviewComponent key={post.id} thumbnailUrl={post.thumbnailUrl} title={post.title} />)
                        }    
                        return <BlogSmallPreviewComponent key={post.id} title={post.title} thumbnailUrl={post.thumbnailUrl}  columnStartNumber={index % 2 === 1 ? 1 : 2}/>
                    }
                )}
            </div>
        </div>
    )
}