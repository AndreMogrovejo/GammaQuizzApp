import React from "react";
import { YStack, Text } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <YStack
      backgroundColor="#FD6D6A"
      padding="$4"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <Ionicons name="arrow-back" size={24} color="white" />
      <Text color="white" fontSize="$5">
        9:41
      </Text>
      <YStack flexDirection="row" alignItems="center">
        <Ionicons name="wifi" size={16} color="white" />
        <Ionicons name="battery-full" size={24} color="white" />
      </YStack>
    </YStack>
  );
};

export default Header;
