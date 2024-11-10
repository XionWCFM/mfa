import { Link } from "expo-router";
import { Button as NButton, Text, View } from "react-native";
import { Vertical } from "../ui/vertical";

export const Hi = () => {
  return (
    <View className=" flex-1 flex flex-row items-space-between">
      <Vertical>
        <NButton title="hello" />
        <Link href="/">srdashello</Link>
      </Vertical>
    </View>
  );
};
