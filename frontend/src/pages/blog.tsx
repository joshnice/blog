import { useQuery } from "react-query";
import { useContext } from "react";
import { getPosts } from "../api/api-functions";
import { useNavigate } from "react-router-dom";
import { PageTitleComponent } from "../components/page-title";
import { BlogPreviewComponent } from "../components/blog-preview";
import { LoadingBarComponent } from "../components/loading-bar";
import { PageContainer } from "../components/page-container";
import { PreviousPageContext } from "../context/page-context";
import { blogPage } from "../constants-and-types/constants";

export const BlogPage = () => {
    const { data: posts, isLoading: isPostsLoading } = useQuery("posts", getPosts);

    const navigate = useNavigate();

    const previousPageContext = useContext(PreviousPageContext)

    const handleBlogClicked = (blogId: string) => {
        navigate(`${blogId}`);
        previousPageContext?.setPreviousPath?.(`${blogPage.path}/${blogId}`);
    }

    if (isPostsLoading || posts == null) {
        return <LoadingBarComponent />
    }

    return (
        <PageContainer className="flex flex-col items-center justify-start gap-7">
            <PageTitleComponent title="Latest blog posts" />
            <div className="flex flex-col w-full gap-5">
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
        </PageContainer>
    )
}