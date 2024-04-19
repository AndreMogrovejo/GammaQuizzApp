import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10 * 1000 * 60,
      retry: 3
    }
  }
};

export const getQueryClient = () => new QueryClient(queryClientConfig);
