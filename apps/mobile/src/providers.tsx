import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
} from "@expo-google-fonts/noto-sans-kr";

import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, Suspense, useEffect } from "react";
import {
  ScrollView,
  RefreshControl,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { usePullToRefresh } from "@/src/hooks/use-pull-to-refresh";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@suspensive/react";
import { WebViewProvider } from "./webview/web-view-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { gcTime: 1000 * 60 * 60 * 24, staleTime: 1000 * 60 },
  },
});

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={null}>
        <Suspense>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <FontProvider>
                <WebViewProvider>
                  <RefreshProvider>
                    <KeyboardAvoidingProvider>
                      {children}
                    </KeyboardAvoidingProvider>
                  </RefreshProvider>
                </WebViewProvider>
              </FontProvider>
            </SafeAreaView>
          </SafeAreaProvider>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

const KeyboardAvoidingProvider = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const RefreshProvider = ({ children }: PropsWithChildren) => {
  const [refreshing, onRefresh] = usePullToRefresh();
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};

const FontProvider = ({ children }: PropsWithChildren) => {
  const [loaded, error] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return children;
};
