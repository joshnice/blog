import { useQuery } from "react-query";
import { getPosts } from "../api/api-functions";
import { useNavigate } from "react-router-dom";
import { PageTitleComponent } from "../components/page-title";
import { BlogPreviewComponent } from "../components/blog-preview";
import { getBlogPreviewColumnPositionEnd, getBlogPreviewColumnPositionStart } from "../helpers.ts/blog-helpers";

export const BlogPage = () => {
    const { data: posts, isLoading: isPostsLoading } = useQuery("posts", getPosts);

    const navigate = useNavigate();

    const handleBlogClicked = (blogId: string) => {
        navigate(`${blogId}`);
    }

    if (isPostsLoading || posts == null) {
        return <p>Is loading...</p>
    }

    return (
        <div className="flex flex-col items-center justify-start w-2/3 gap-7">
            <PageTitleComponent title="Latest blog posts" />
            <div className="grid items-center justify-items-center grid-cols-2 grid-rows-preview w-full gap-5">
                {posts.map((post, index) => {
                        return ( 
                            <BlogPreviewComponent 
                                key={post.id} 
                                id={post.id}
                                onBlogClicked={handleBlogClicked} 
                                title={post.title}
                                thumbnailUrl={post.thumbnailUrl} 
                                columnStart={getBlogPreviewColumnPositionStart(index)}
                                columnEnd={getBlogPreviewColumnPositionEnd(index)}
                            />
                        );
                    }
                )}
            </div>
        </div>
    )
}