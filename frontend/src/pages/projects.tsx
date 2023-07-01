import { ReactNode } from "react";
import { PageContainer } from "../components/page-container";
import { Header, Text } from "../components/page-text";

export const ProjectsPage = () => (
    <PageContainer className="flex flex-col gap-4">
        <Header>Projects</Header>
        <Text>Here is the projects I have worked on. Click on one to find out more about it, including the source code and where you can find it!</Text>
        <div className="flex flex-col gap-4 items-center justify-center mt-2">
            <ProjectCard className="bg-emerald-500">joshliamnice</ProjectCard>
            <ProjectCard className="bg-sky-900">Castle Damp and Timber</ProjectCard>
        </div>
    </PageContainer>
)

const ProjectCard = ({ children, className }: { children: ReactNode, className?: string }) => (
    <button type="button" className={`${className} h-28 w-7/12 rounded-lg flex items-center justify-center font-bold text-white bold hover:h-56 transition-all duration-500`}>
        {children}
    </button>
)