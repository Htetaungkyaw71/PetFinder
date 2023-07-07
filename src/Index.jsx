import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const Index = () => {
  const query = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={query}>
      <App />
    </QueryClientProvider>
  );
};

export default Index;
