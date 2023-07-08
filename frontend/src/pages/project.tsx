import {  useParams } from "react-router-dom";
import { PageContainer } from "../components/page-container";
import { Header, SubHeader, Text } from "../components/page-text";
import { useMemo } from "react";
import { projects } from "../constants-and-types/projects-types-and-constants";


export const ProjectPage = () => {
    const params = useParams();
    const project = useMemo(() => projects.find((project) => project.id === params.name), [params.name])
    
    if (project == null) {
        return <></>
    }
    
    return (
        <PageContainer className="flex flex-col gap-4">
            <Header>{project.title}</Header>
            <div className="flex">
                <div className="flex flex-col w-3/4">
                    <SubHeader>About</SubHeader>
                    <Text>{project.about}</Text>
                </div>
                <div className="flex flex-col flex-shrink-1">
                    <SubHeader>Stack</SubHeader>
                    {project.technologies.map((tech) => <Text key={tech.name}>{tech.name}</Text>)}
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