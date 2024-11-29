import * as Sentry from "@sentry/react";
import { QueryClient, QueryClientProvider } from "react-query"
import { RouterComponent } from "./pages/router";

Sentry.init({
  dsn: "https://9828452521bec5d46b6ee751b58d8796@o4508383409864704.ingest.de.sentry.io/4508383412682832",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({ mask: [] }),
  ],
  enabled: window.location.hostname === "www.joshliamnice.co.uk",
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0, 
  replaysOnErrorSampleRate: 1.0
});

function App() {

  const queryClient = new QueryClient({   
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient} >
      <RouterComponent />
    </QueryClientProvider>
  )
}

export default App
