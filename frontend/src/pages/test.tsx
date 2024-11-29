import { PageContainer } from "../components/page-container";

export function TestPage() {
    
    const handleThrowError = () => {
        throw new Error("Something has gone wrong");
    }

    const handleThrowConsoleError = () => {
        console.error("Something has gone wrong");
    }

    return (
        <PageContainer>
            <div className="flex flex-col gap-4">
                <button className="bg-slate-200" type="button" onClick={handleThrowError}>Throw error</button>
                <button className="bg-slate-200" type="button" onClick={handleThrowConsoleError}>Throw console error</button>
            </div>
        </PageContainer>
    )
}