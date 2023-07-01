import { PageContainer } from "../components/page-container";
import { PageTitleComponent } from "../components/page-text";

export const ProjectsPage = () => (

    <PageContainer className="flex flex-col gap-4">
        <PageTitleComponent title="Projects" />
        <p className="text-white">Here is the projects I have worked on. Click on one to find out more about it, including the source code and where you can find it!</p>
    </PageContainer>

)