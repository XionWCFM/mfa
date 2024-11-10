import { DefaultProps, DefaultPropsProvider, ErrorBoundary, Suspense } from "@suspensive/react";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
import { OverlayProvider } from "overlay-kit";
import { PropsWithChildren } from "react";

const defaultProps = new DefaultProps({ Delay: { ms: 200 } });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 3,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <DefaultPropsProvider defaultProps={defaultProps}>
          <OverlayProvider>
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary onReset={reset} fallback={<div>error</div>}>
                  <Suspense fallback={<div>loading</div>}>
                    {children}
                    <ReactQueryDevtools />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </OverlayProvider>
        </DefaultPropsProvider>
      </Provider>
    </QueryClientProvider>
  );
};
