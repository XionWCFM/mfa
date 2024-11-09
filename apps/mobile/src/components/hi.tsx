import { Button as NButton, Text, View } from "react-native";
import { Vertical } from "../ui/vertical";
import { Link } from "expo-router";

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
