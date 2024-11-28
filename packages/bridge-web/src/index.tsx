import { AppBridge } from "@repo/bridge";
import { linkBridge } from "@webview-bridge/web";

export const bridge = linkBridge<AppBridge>();
