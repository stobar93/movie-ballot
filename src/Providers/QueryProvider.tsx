import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

type QueryProviderType = {
  children: ReactNode;
  shouldRetry?: boolean;
};

const QueryProvider  = ({ children, shouldRetry }: QueryProviderType) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: shouldRetry ?? true } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;