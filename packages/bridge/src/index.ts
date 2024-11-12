import { bridge } from "@webview-bridge/react-native";
export type ImageAsset = {
  uri: string;
  assetId?: string | null;
  width: number;
  height: number;
  type?: "image" | "video";
  fileName?: string | null;
  fileSize?: number;
  exif?: Record<string, any> | null;
  base64: string;
  duration?: number | null;
  mimeType?: string;
};

export type DownloadImageReturn =
  | {
      status: "initial" | "permission_denied" | "permission_required" | "canceled" | "download_failed";
      success: false;
    }
  | {
      status: "success";
      success: true;
    };

export type UploadImageReturn =
  | {
      status: "initial" | "permission_denied" | "permission_required" | "canceled";
      success: false;
      value: ImageAsset[];
    }
  | {
      status: "success";
      success: true;
      value: ImageAsset[];
    };

export type BridgeFunctions = {
  uploadImage: () => Promise<UploadImageReturn>;
  downloadImage: (imageLink: string) => Promise<DownloadImageReturn>;
  openExternalUrl: (url: string) => Promise<void>;
  copyClipboard: (text: string) => Promise<void>;
  requestReview: () => Promise<boolean>;
  getUserAppVersion: () => Promise<string | null>;
};

const abstractBridge = bridge<BridgeFunctions>({} as BridgeFunctions);

export type AppBridge = typeof abstractBridge;
