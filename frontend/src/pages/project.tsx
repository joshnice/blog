import {  useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../components/page-container";
import { Header, Link, SubHeader, Text } from "../components/page-text";
import { PropsWithChildren, useContext, useMemo } from "react";
import { Technology } from "../constants-and-types/projects-types-and-constants";
import { ImLink } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { blogPage } from "../constants-and-types/constants";
import { PreviousPageContext } from "../context/page-context";
import { useQuery } from "react-query";
import { getProject } from "../api/api-functions";
import { LoadingBarComponent } from "../components/loading-bar";


export const ProjectPage = () => {
    const params = useParams();

    const { data: project, isLoading } = useQuery(["project", params.id], () => getProject(params.id));

    const navigate = useNavigate();
    const previousPageContext = useContext(PreviousPageContext);

    const handleBlogClicked = (blogId: string) => {
        const path = `${blogPage.path}/${blogId}`
        navigate(path);
        previousPageContext?.setPreviousPath?.(path);
    }
    
    if (isLoading || project == null) {
        return <LoadingBarComponent />
    }
    
    return (
        <PageContainer>
            <div className="flex flex-col gap-6">
                <Header>{project.title}</Header>

                <ProjectSection>
                    <ProjectSectionLarge>
                        <SubHeader>About & Motivation</SubHeader>
                        <Text>{project.about}</Text>
                    </ProjectSectionLarge>
                    <ProjectSectionSmall>
                        <SubHeader>Stack</SubHeader>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => <TechnologyChip key={tech.name} technology={tech} />)}
                        </div>
                    </ProjectSectionSmall>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionLarge>
                        <SubHeader>Features</SubHeader>
                        {project.features.map((feature) => <Text key={feature.name}> <span className="font-bold">{feature.name}</span> - {feature.about}</Text>)}
                    </ProjectSectionLarge>
                    <ProjectSectionSmall>
                        <div className="flex flex-col gap-2">
                            <SubHeader>Links</SubHeader>
                            <div className="flex items-center gap-2">
                                <ImLink className="text-slate-300" />
                                <Link href={project.links.project.link} newTab>{project.links.project.label}</Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <SiGithub className="text-slate-300" />
                                <Link href={project.links.code.link} newTab>{project.links.code.label}</Link>         
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            {project.blogPosts.length !== 0 && (
                                <> 
                                    <SubHeader>Related blog posts</SubHeader>
                                    {project.blogPosts.map((post) => <Link key={post.id} onClick={() => handleBlogClicked(post.id)} newTab>{post.name}</Link>)}
                                </>
                            )}
                        </div>
                    </ProjectSectionSmall>
                </ProjectSection>
                
                <div className="flex flex-col gap-6">
                    <SubHeader>Technologies</SubHeader>
                    <div className="flex flex-col gap-4">
                        {project.technologies.filter(({ about }) => about != null).map((tech) => (
                            <Text key={tech.name}>
                                <span className="font-bold">{tech.name}</span> - {tech.about}
                            </Text>
                        ))}
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

const ProjectSection = ({ children }: PropsWithChildren) => (
    <div className="flex  lg:flex-row flex-col gap-6">
        {children}
    </div>
)


const ProjectSectionLarge = ({ children }: PropsWithChildren) => (
    <div className="flex flex-col gap-2  w-full lg:w-2/3">
        {children}
    </div>
)

const ProjectSectionSmall = ({ children }: PropsWithChildren) => (
    <div className="flex flex-col gap-2 w-full lg:w-1/3">
        {children}
    </div>
)
            
const TechnologyChip = ({ technology }: { technology: Technology }) => {

    const colourClassNames = useMemo(() => {
        switch(technology.type) {
            case "backend":
                return "border-red-400 text-red-400";
            case "frontend":
                return "border-teal-500 text-teal-500";
            case "infra":
                return "border-fuchsia-400 text-fuchsia-400";
        }
    }, [technology.type])

    return (
        <div className={`h-8 pl-4 pr-4 flex items-center justify-center rounded-3xl whitespace-nowrap border-2 font-medium ${colourClassNames}`}>
            {technology.name}
        </div>
    )
}