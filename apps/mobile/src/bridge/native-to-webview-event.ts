import { z } from "zod";
import { createEnum } from "../utils/create-enum";
import { validate } from "../utils/validate";

const NATIVE_TO_WEBVIEW_EVENT_LIST = ["UPLOAD_IMAGE_RESULT", "DOWNLOAD_IMAGE_RESULT"] as const;
export type NativeToWebviewEvent = (typeof NATIVE_TO_WEBVIEW_EVENT_LIST)[number];
export const NATIVE_TO_WEBVIEW_EVENT = createEnum(NATIVE_TO_WEBVIEW_EVENT_LIST);
export const validateNativeToWebviewEvent = validate<NativeToWebviewEvent>(z.enum(NATIVE_TO_WEBVIEW_EVENT_LIST));
