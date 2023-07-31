import { PageContainer } from "../components/page-container"
import { Header, SubHeader, Text } from "../components/page-text"

export const ExperiencePage = () => {
    return (
        <PageContainer>
            <div className="flex flex-col justify-start gap-5">
                <Header>Experience</Header>
                <div className="flex flex-col justify-start gap-8">
                    <div className="flex flex-col justify-start gap-3">
                        <SubHeader>Software Enginer @ Iventis </SubHeader>
                        <Text>Before I had graduated from university I had started my first job after University at Iventis. At the time Iventis was a start up company and I joined 2 other full time employees at the company. My first role at the company was a front end developer, however with any start up, you soon have to go outside your norms of the job title and complete any task which is necessary for the business to succeed. During the time at Iventis I have helped rewrite the whole application from the previous stack of Angular and Express to React and DotNet. Currently I am a Software Engineer and specialise in the front end specifically in the mapping technologies which we use. The company now has 15 full time employees and is a very exciting and promising company to be part of.</Text>
                    </div>
                    <div className="flex flex-col justify-start gap-3">
                        <SubHeader>Planning Manager @ Expo2020 </SubHeader>
                        <Text>While at Iventis I had an incredible opportunity to work in Dubai at the Expo 2020. This was an international event which attracted over 25 million visitors over six months. While there I created specific plans with Ivenitis' mapping technologies. While I was working in the planning office a number of members of the team left. This gave me the opportunity to change roles to become a planning manager, this was completely new to me as I had never worked in events before. However even though I wasn't coding I was still solving problems which I thoroughly enjoy doing. While working as a planning manager I had the responsibilities of creating daily run sheets and also creating a forecasting tool. This would predict which events would attract a high crowd depending on different variables. This was very effective and highlighted a number of events which were going to cause operational problems on the Expo site.
</Text>
                    </div>                  
                    <div className="flex flex-col justify-start gap-3">
                        <SubHeader>Studying Computer Science @ University of Lincoln </SubHeader>
                        <Text>I spent 3 years studying computer science at University of Lincoln. This is where I started to really enjoy programming, learning more about technology and the development world. I gained a first class degree in September 2019 and before I had graduated I had started my first job at Iventis. During the time at University I covered a broad range of subjects, this ranged from understanding computer hardware such as learning about the inner workings of a processor and memory to learning about fundamentals of programming. While in my final year of university I took a keen interest in web development, while doing my final year dissertation. For this I created a collaborative tool where school children could work together to create stories. Not only did I learn about web development but also the importance of design and human computer interaction.</Text>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}