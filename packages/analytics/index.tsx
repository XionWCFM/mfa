import { env } from "@repo/env";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "./google";
import { PostHogProvider } from "./posthog/client";

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <PostHogProvider>
    {children}
    {env.NODE_ENV !== "development" && env.PUBLIC_GA_MEASUREMENT_ID && (
      <GoogleAnalytics gaId={env.PUBLIC_GA_MEASUREMENT_ID} />
    )}
  </PostHogProvider>
);
