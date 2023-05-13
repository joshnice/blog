import { useQuery } from "react-query";
import { getPosts } from "../api/api-functions";
import { useNavigate } from "react-router-dom";
import { PageTitleComponent } from "../components/page-title";
import { BlogPreviewComponent } from "../components/blog-preview";
import { LoadingBarComponent } from "../components/loading-bar";

export const BlogPage = () => {
    const { data: posts, isLoading: isPostsLoading } = useQuery("posts", getPosts);

    const navigate = useNavigate();

    const handleBlogClicked = (blogId: string) => {
        navigate(`${blogId}`);
    }

    if (isPostsLoading || posts == null) {
        return <LoadingBarComponent />
    }

    return (
        <div className="flex flex-col items-center justify-start w-11/12 sm:w-10/12 md:w-2/3 xl:w-1/2 gap-7">
            <PageTitleComponent title="Latest blog posts" />
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-preview-mobile md:grid-rows-preview w-full gap-5">
                {posts.map((post, index) => {
                        return ( 
                            <BlogPreviewComponent 
                                key={post.id} 
                                id={post.id}
                                onBlogClicked={handleBlogClicked} 
                                title={post.title}
                                thumbnailUrl={post.thumbnailUrl}
                                index={index}
                            />
                        );
                    }
                )}
            </div>
        </div>
    )
}