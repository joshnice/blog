import { QueryClient, QueryClientProvider } from "react-query"
import { RouterComponent } from "./pages/router";
import { H } from 'highlight.run';

H.init('6gl8vle9', {
	tracingOrigins: true,
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
    urlBlocklist: [
      "http://localhost:5173/"
    ]
  }
});

function App() {

  const queryClient = new QueryClient({   
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  console.log("version - 1.1.0")

  return (
    <QueryClientProvider client={queryClient} >
      <RouterComponent />
    </QueryClientProvider>
  )
}

export default App
