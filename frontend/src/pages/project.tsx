import {  useParams } from "react-router-dom";
import { PageContainer } from "../components/page-container";
import { Header, SubHeader, Text } from "../components/page-text";
import { useMemo } from "react";
import { Technology, projects } from "../constants-and-types/projects-types-and-constants";


export const ProjectPage = () => {
    const params = useParams();
    const project = useMemo(() => projects.find((project) => project.id === params.name), [params.name])
    
    if (project == null) {
        return <></>
    }
    
    return (
        <PageContainer className="flex flex-col gap-4">
            <Header>{project.title}</Header>
            <div className="flex gap-6">
                <div className="flex flex-col w-2/3">
                    <SubHeader>About</SubHeader>
                    <Text>{project.about}</Text>
                </div>
                <div className="flex flex-col gap-2 w-1/3">
                    <SubHeader>Stack</SubHeader>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => <TechnologyChip key={tech.name} technology={tech} />)}
                    </div>
                </div>
            </div>
            <div>
                <SubHeader>Features</SubHeader>
                {project.features.map((feature) => <Text key={feature}>{feature}</Text>)}
            </div>
            <div>
                <SubHeader>Technologies</SubHeader>
                {project.technologies.filter(({ about }) => about != null).map((tech) => (
                <Text key={tech.name}>
                    <span className="font-bold">{tech.name}</span> - {tech.about}
                </Text>
                ))}
            </div>
        </PageContainer>
    )
}

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
    
    return <div className={`h-8 pl-4 pr-4 flex items-center justify-center rounded-3xl whitespace-nowrap border-2 font-medium ${colourClassNames}`}>{technology.name}</div>
}