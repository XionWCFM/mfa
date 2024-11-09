import { createWebView, bridge } from "@webview-bridge/react-native";

// Register functions in the bridge object in your React Native code
export const appBridge = bridge({
  async getMessage() {
    return "Hello, I'm native";
  },
  async sum(a: number, b: number) {
    return a + b;
  },
});

export type AppBridge = typeof appBridge;

export const { WebView } = createWebView({ bridge: appBridge, debug: true });
