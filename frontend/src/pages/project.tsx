import { ReactNode } from "react";
import { PageContainer } from "../components/page-container";
import { Header, Text } from "../components/page-text";

export const ProjectsPage = () => (

    <PageContainer className="flex flex-col gap-4">
        <Header>Projects</Header>
        <Text>Here is the projects I have worked on. Click on one to find out more about it, including the source code and where you can find it!</Text>
        <div className="flex flex-col gap-4 items-center justify-center mt-2">
            <ProjectCard className="bg-green-500">Project One</ProjectCard>
            <ProjectCard className="bg-blue-500">Project Two</ProjectCard>
            <ProjectCard className="bg-red-500">Project Three</ProjectCard>
            <ProjectCard className="bg-purple-500">Project Four</ProjectCard>
        </div>
    </PageContainer>

)

const ProjectCard = ({ children, className }: { children: ReactNode, className?: string }) => (
    <div className={`${className} h-28 w-7/12 rounded-lg flex items-center justify-center font-bold text-white bold`}>
        {children}
    </div>
)