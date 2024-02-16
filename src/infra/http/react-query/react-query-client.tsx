import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ReactQueryClientProviderProps {
  children: React.ReactNode;
}

export function ReactQueryClientProvider({
  children,
}: ReactQueryClientProviderProps): React.ReactElement<ReactQueryClientProviderProps> {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
