import { validate } from "../utils/validate";
import { z } from "zod";

const WEBVIEW_TO_NATIVE_EVENT_LIST = [
  "OPEN_WEB_BROWSER",
  "COPY_TO_CLIPBOARD",
  "UPLOAD_IMAGE",
  "DOWNLOAD_IMAGE",
] as const;

export type WebviewToNativeEvent =
  (typeof WEBVIEW_TO_NATIVE_EVENT_LIST)[number];

export const WEBVIEW_TO_NATIVE_EVENT = WEBVIEW_TO_NATIVE_EVENT_LIST.reduce(
  (acc, cur) => {
    //@ts-expect-error
    acc[cur] = cur;
    return acc;
  },
  {} as { [K in WebviewToNativeEvent]: K }
);

export const validateWebviewToNativeEvent = validate<WebviewToNativeEvent>(
  z.enum(WEBVIEW_TO_NATIVE_EVENT_LIST)
);

const r = WEBVIEW_TO_NATIVE_EVENT.OPEN_WEB_BROWSER;
