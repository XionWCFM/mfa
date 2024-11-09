import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "@/global.css";
import { Providers } from "@/src/providers";
import { Slot } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Slot />
    </Providers>
  );
}
