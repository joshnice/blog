import { QueryClient, QueryClientProvider } from "react-query"
import { RouterComponent } from "./pages/router";

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterComponent />
    </QueryClientProvider>
  )
}

export default App
