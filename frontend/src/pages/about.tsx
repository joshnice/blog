import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/about-me.jpg";
import { PageContainer } from "../components/page-container"
import { blogPage, projectsPage } from "../constants-and-types/constants";
import { Page } from "../components/navigation-bar";
import { Header, Link, SubHeader, Text } from "../components/page-text";
import { Footer } from "../components/footer";

export const AboutPage = () => {

    const navigate = useNavigate();

    const onLinkClick = (page: Page) => {
        navigate(page.path);
    }

    return (
        <PageContainer>
            <div className="flex lg:flex-row flex-col lg:gap-2 gap-6">
                <div className="flex flex-col gap-6 lg:w-1/2 w-full lg:pr-10">
                    <Header>A little bit about me</Header>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <SubHeader>Past</SubHeader>
                            <Text>
                                I was born in the United Kingdom in the city of Derby. Ever since I first started using a computer I wanted to be able to write code. After finishing school and then sixth form I went to the University of Lincoln to study computer science. In 2019 I graduated with a first class degree. Shortly after finishing university I landed my first and current job at Iventis as a graduate software engineer.
                            </Text>
                        </div>
                        <div className="flex flex-col gap-2">
                            <SubHeader>Present</SubHeader>
                            <Text>
                                I primarily focus my work time writing front end code to help build the great products we offer at Iventis. I have a lot of experience with frameworks such as React and Angular and love anything TypeScript. I enjoy dabbling in code outside of work as well, I try to post as much as I can on my <Link onClick={() => onLinkClick(blogPage)}>blog</Link> and I really enjoy  building things, it is my favourite part of being a software engineer, we can build whatever with whatever technology we choose. When I am not at my desk I love walking, going out and sports, specifically football and cricket.
                            </Text>    
                        </div>
                        <div className="flex flex-col gap-2">
                            <SubHeader>Future </SubHeader>
                            <Text>
                                I have no idea what my future is going to hold… if I did it would be rather boring. Hopefully I will be working my way down the list of tech I want to learn and building some useful and interesting apps. You can check out my <Link onClick={() => onLinkClick(projectsPage)}>projects page</Link> to see what I have built recently and what I am currently building. 

                            </Text>
                        </div>
                    </div>
                </div>
                <div className="flex align-center self-center w-full sm:w-2/3 lg:w-1/2">
                    <img src={profilePicture} alt="Josh smiling on a bridge" className="rounded-xl object-cover w-auto h-auto"/>
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
}