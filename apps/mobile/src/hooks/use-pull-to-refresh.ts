import { useWebView } from "@/src/webview/web-view-context";
import { useCallback, useState } from "react";

export const usePullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { webViewRef } = useWebView();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    webViewRef.current?.reload();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [webViewRef.current]);

  return [refreshing, onRefresh] as const;
};
