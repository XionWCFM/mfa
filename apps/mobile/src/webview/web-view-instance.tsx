import { SharedWebView } from "./web-view-context";

const BASE_URL = __DEV__ ? "http://localhost:5100" : "";
const DECELERATION_RATE = 0.999;
const JAVASCRIPT_BEFORE_CONTENTLOADED = `window.__APP_DEV__="${__DEV__ ? "development" : "production"}";`;

export const WebViewInstance = () => {
  return (
    <SharedWebView
      source={{ uri: BASE_URL }}
      style={{ flex: 1 }}
      mixedContentMode={"always"}
      webviewDebuggingEnabled={__DEV__}
      javaScriptEnabled
      bounces
      allowsBackForwardNavigationGestures
      decelerationRate={DECELERATION_RATE}
      overScrollMode={"never"}
      scrollEnabled={true}
      injectedJavaScriptBeforeContentLoaded={JAVASCRIPT_BEFORE_CONTENTLOADED}
    />
  );
};
