import { useQuery } from "react-query";
import { useContext } from "react";
import { getPosts } from "../api/api-functions";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/page-text";
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
            <Header>Latest blog posts</Header>
            <div className="max-w-[1000px] grid lg:grid-cols-2 grid-cols-1 gap-3">
                {posts.map((post) => {
                        return ( 
                            <BlogPreviewComponent 
                                key={post.id} 
                                id={post.id}
                                onBlogClicked={handleBlogClicked} 
                                title={post.title}
                                thumbnailUrl={post.thumbnailUrl}
                                description={post.description}
                                date={post.date}

                            />
                        );
                    }
                )}
            </div>
        </PageContainer>
    )
}