'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      throwOnError: true,
    },
  },
});

export const Provider = ({ children }: ProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

interface ProviderProps {
  children: React.ReactNode;
}
