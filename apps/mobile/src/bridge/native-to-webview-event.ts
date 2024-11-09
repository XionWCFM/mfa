import { validate } from "../utils/validate";
import { z } from "zod";

const NATIVE_TO_WEBVIEW_EVENT_LIST = [
  "UPLOAD_IMAGE_RESULT",
  "DOWNLOAD_IMAGE_RESULT",
] as const;

export type NativeToWebviewEvent =
  (typeof NATIVE_TO_WEBVIEW_EVENT_LIST)[number];

export const NATIVE_TO_WEBVIEW_EVENT = NATIVE_TO_WEBVIEW_EVENT_LIST.reduce(
  (acc, cur) => {
    //@ts-expect-error
    acc[cur] = cur;
    return acc;
  },
  {} as { [K in NativeToWebviewEvent]: K }
);

export const validateNativeToWebviewEvent = validate<NativeToWebviewEvent>(
  z.enum(NATIVE_TO_WEBVIEW_EVENT_LIST)
);
