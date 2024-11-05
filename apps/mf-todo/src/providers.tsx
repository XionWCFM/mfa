import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
import { OverlayProvider } from "overlay-kit";
import { PropsWithChildren, Suspense } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <OverlayProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </Suspense>
        </OverlayProvider>
      </Provider>
    </QueryClientProvider>
  );
};
