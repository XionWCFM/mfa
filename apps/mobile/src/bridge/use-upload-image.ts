import * as ImagePicker from "expo-image-picker";
import { useCallback } from "react";
import { Alert, Linking } from "react-native";

type ImageAsset = NonNullable<
  ImagePicker.ImagePickerResult["assets"]
>[number] & {
  base64: string;
};

export type UploadImageReturn =
  | {
      status: "permission_denied" | "permission_required" | "canceled";
      success: false;
      value: ImageAsset[];
    }
  | {
      status: "success";
      success: true;
      value: ImageAsset[];
    };

export const useUploadImage = () => {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const uploadImage = useCallback(async (): Promise<UploadImageReturn> => {
    if (!status?.granted) {
      if (!status?.canAskAgain) {
        Alert.alert("알림", "이미지 업로드 권한을 허용해주세요.", [
          { text: "취소", style: "cancel" },
          {
            text: "설정 열기",
            onPress: () => {
              Linking.openSettings();
            },
          },
        ]);
        return { success: false, status: "permission_denied", value: [] };
      }

      const permission = await requestPermission();

      if (!permission.granted) {
        return { success: false, status: "permission_required", value: [] };
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.canceled) {
      return { success: false, status: "canceled", value: [] };
    }

    return {
      success: true,
      status: "success",
      value: result.assets as ImageAsset[],
    };
  }, [status, requestPermission]);

  return uploadImage;
};
