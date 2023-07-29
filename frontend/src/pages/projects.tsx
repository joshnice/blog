import { ReactNode } from "react";
import { PageContainer } from "../components/page-container";
import { Header, Text } from "../components/page-text";
import { projectsPage } from "../constants-and-types/constants";
import { useNavigate } from "react-router-dom";
import { ProjectId, projects } from "../constants-and-types/projects-types-and-constants";
import { useQuery } from "react-query";
import { getProjects } from "../api/api-functions";

export const ProjectsPage = () => {

    const navigate = useNavigate();
    
    const onProjectClicked = (name: ProjectId) => {
        const selectedProject = projects.find((project) => project.id === name);
        if (selectedProject != null) {
            navigate({ pathname: `${projectsPage.path}/${selectedProject.id}`});
        }
    }

    const {data: projectsApi } = useQuery(["projects"], getProjects);

    console.log(projectsApi);

    return (
        <PageContainer>
            <div className="flex flex-col gap-4">
                <Header>Projects</Header>
                <Text>Here is the projects I have worked on. Click on one to find out more about it, including the source code and where you can find it!</Text>
                <div className="flex flex-col gap-4 items-center justify-center mt-2">
                    <ProjectCard className="bg-emerald-500" onClick={() => onProjectClicked("joshliamnice")}>joshliamnice</ProjectCard>
                    <ProjectCard className="bg-sky-900" onClick={() => onProjectClicked("castle")}>Castle Damp and Timber</ProjectCard>
                </div>
            </div>
        </PageContainer>
    )
}
const ProjectCard = ({ children, className, onClick }: { children: ReactNode, onClick: () => void; className?: string }) => (
    <button onClick={onClick} type="button" className={`${className} h-28 w-7/12 rounded-lg flex items-center justify-center font-bold text-white bold hover:h-56 transition-all duration-500`}>
        {children}
    </button>
)