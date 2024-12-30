import { QueryClient } from '@tanstack/react-query';

const queryClientConfig = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20, // 20 min
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default queryClientConfig;
