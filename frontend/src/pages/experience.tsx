import { PageContainer } from "../components/page-container"
import { Header, SubHeader, Text } from "../components/page-text"

export const ExperiencePage = () => {
    return (
        <PageContainer>
            <div className="flex flex-col justify-start gap-5">
                <Header>Experience</Header>
                <div className="flex flex-col justify-start gap-5">
                    <div className="flex flex-col justify-start gap-3">
                        <SubHeader>Software Enginer @ Iventis </SubHeader>
                        <Text>Qui aliqua fugiat enim in nostrud ea nisi labore labore aute ad irure adipisicing. Nisi irure ullamco officia laborum sint ullamco aute deserunt eu aliquip aliqua sunt. Labore excepteur dolore commodo non magna excepteur excepteur mollit minim est duis enim. Non id eiusmod quis Lorem aute deserunt qui consequat veniam dolore mollit. Aliquip ex excepteur et mollit consequat occaecat consequat pariatur cillum elit nisi aute aliqua id. Eiusmod minim minim consequat cupidatat. Excepteur consequat Lorem elit reprehenderit ex cillum laboris sunt pariatur deserunt dolor enim dolore.</Text>
                    </div>
                    <div className="flex justify-center">
                        <hr className="w-4/5 text-center" />
                    </div>
                    <div className="flex flex-col justify-start gap-3">
                        <SubHeader>Planning Manager @ Expo2020 </SubHeader>
                        <Text>Qui aliqua fugiat enim in nostrud ea nisi labore labore aute ad irure adipisicing. Nisi irure ullamco officia laborum sint ullamco aute deserunt eu aliquip aliqua sunt. Labore excepteur dolore commodo non magna excepteur excepteur mollit minim est duis enim. Non id eiusmod quis Lorem aute deserunt qui consequat veniam dolore mollit. Aliquip ex excepteur et mollit consequat occaecat consequat pariatur cillum elit nisi aute aliqua id. Eiusmod minim minim consequat cupidatat. Excepteur consequat Lorem elit reprehenderit ex cillum laboris sunt pariatur deserunt dolor enim dolore.</Text>
                    </div>
                    <div className="flex justify-center">
                        <hr className="w-4/5 text-center" />
                    </div>                    
                    <div className="flex flex-col justify-start gap-3">
                        <SubHeader>Studying Computer Science @ University of Lincoln </SubHeader>
                        <Text>Qui aliqua fugiat enim in nostrud ea nisi labore labore aute ad irure adipisicing. Nisi irure ullamco officia laborum sint ullamco aute deserunt eu aliquip aliqua sunt. Labore excepteur dolore commodo non magna excepteur excepteur mollit minim est duis enim. Non id eiusmod quis Lorem aute deserunt qui consequat veniam dolore mollit. Aliquip ex excepteur et mollit consequat occaecat consequat pariatur cillum elit nisi aute aliqua id. Eiusmod minim minim consequat cupidatat. Excepteur consequat Lorem elit reprehenderit ex cillum laboris sunt pariatur deserunt dolor enim dolore.</Text>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}