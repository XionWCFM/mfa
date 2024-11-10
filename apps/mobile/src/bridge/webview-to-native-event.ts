import { z } from "zod";
import { createEnum } from "../utils/create-enum";
import { validate } from "../utils/validate";

const WEBVIEW_TO_NATIVE_EVENT_LIST = [
  "OPEN_WEB_BROWSER",
  "COPY_TO_CLIPBOARD",
  "UPLOAD_IMAGE",
  "DOWNLOAD_IMAGE",
] as const;

export type WebviewToNativeEvent = (typeof WEBVIEW_TO_NATIVE_EVENT_LIST)[number];
export const WEBVIEW_TO_NATIVE_EVENT = createEnum(WEBVIEW_TO_NATIVE_EVENT_LIST);
export const validateWebviewToNativeEvent = validate<WebviewToNativeEvent>(z.enum(WEBVIEW_TO_NATIVE_EVENT_LIST));

