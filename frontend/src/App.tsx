import { QueryClient, QueryClientProvider } from "react-query"
import { RouterComponent } from "./pages/router";

function App() {

  const queryClient = new QueryClient({   
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  console.log("version - 1.0.0")

  return (
    <QueryClientProvider client={queryClient} >
      <RouterComponent />
    </QueryClientProvider>
  )
}

export default App
