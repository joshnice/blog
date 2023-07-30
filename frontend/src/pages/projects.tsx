import { ReactNode } from "react";
import { PageContainer } from "../components/page-container";
import { Header, Text } from "../components/page-text";
import { projectsPage } from "../constants-and-types/constants";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getProjects } from "../api/api-functions";
import { LoadingBarComponent } from "../components/loading-bar";

export const ProjectsPage = () => {

    const navigate = useNavigate();

    const {data: projects, isLoading } = useQuery(["projects"], getProjects);
    
    const onProjectClicked = (id: string) => {
        const selectedProject = projects?.find((project) => project.id === id);
        if (selectedProject != null) {
            navigate({ pathname: `${projectsPage.path}/${selectedProject.id}`});
        }
    }

    console.log(projects);

    if (isLoading || projects == null) {
        return <LoadingBarComponent />
    }

    return (
        <PageContainer>
            <div className="flex flex-col gap-4">
                <Header>Projects</Header>
                <Text>Here is the projects I have worked on. Click on one to find out more about it, including the source code and where you can find it!</Text>
                <div className="flex flex-col gap-4 items-center justify-center mt-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} className={getProjectColour(project.name)} onClick={() => onProjectClicked(project.id)}>
                            {project.name}
                        </ProjectCard>
                    ))}
                </div>
            </div>
        </PageContainer>
    )
}

const getProjectColour = (name: string) => {
    switch (name) {
        case "joshliamnice":
            return "bg-emerald-500";
        case "Castle Damp & Timber":
            return "bg-sky-900";
        default: 
            throw new Error("Project colour not handled")
    }
}

const ProjectCard = ({ children, className, onClick }: { children: ReactNode, onClick: () => void; className?: string }) => (
    <button onClick={onClick} type="button" className={`${className} h-28 w-full lg:w-7/12 rounded-lg flex items-center justify-center font-bold text-white bold hover:h-56 transition-all duration-500`}>
        {children}
    </button>
)