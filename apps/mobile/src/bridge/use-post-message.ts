import { useCallback } from "react";
import { useWebView } from "../webview/web-view-context";
import { codec } from "./codec";
import { EventStructure } from "./event-structure";

export const usePostMessage = () => {
  const { webViewRef } = useWebView();
  return useCallback(
    <T extends string, Payload>(message: EventStructure<T, Payload>) => {
      webViewRef.current?.postMessage(codec.encode(message));
    },
    [webViewRef.current]
  );
};
