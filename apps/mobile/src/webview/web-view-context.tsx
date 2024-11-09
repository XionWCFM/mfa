import React, {
  useRef,
  ReactNode,
  useState,
  Fragment,
  useCallback,
} from "react";
import { WebView as NativeWebview, WebViewProps } from "react-native-webview";
import { createSafeContext } from "@xionwcfm/react";
import { WebView } from "@/src/bridge/bridge";

interface WebViewContextType {
  webViewRef: React.RefObject<NativeWebview>;
  navigate: (url: string) => void;
}

export const [WebViewContextProvider, useWebView] =
  createSafeContext<WebViewContextType>(null);

export const WebViewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const webViewRef = useRef<NativeWebview>(null);

  const navigate = useCallback(
    (url: string) => {
      webViewRef.current?.injectJavaScript(`window.location.href = '${url}';`);
    },
    [webViewRef.current]
  );

  return (
    <WebViewContextProvider value={{ webViewRef, navigate }}>
      {children}
    </WebViewContextProvider>
  );
};

export const SharedWebView = (
  props: WebViewProps & {
    fallback?: ReactNode;
    errorFallback?: ReactNode;
  }
) => {
  const { fallback, errorFallback } = props;
  const { webViewRef } = useWebView();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  return (
    <Fragment>
      <WebView
        ref={webViewRef}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={(event) => setError(event.nativeEvent.description)}
        {...props}
      />
      {isLoading && fallback}
      {error && errorFallback}
    </Fragment>
  );
};
