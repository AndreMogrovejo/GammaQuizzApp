import React from "react";
import { XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const NavigationBar = () => {
  return (
    <XStack
      justifyContent="space-around"
      alignItems="center"
      backgroundColor="white"
      paddingVertical="$3"
      borderTopWidth={1}
      borderColor="#e0e0e0"
    >
      <Ionicons name="home-outline" size={24} color="gray" />
      <Ionicons name="search-outline" size={24} color="gray" />
      <YStack
        width={50}
        height={50}
        backgroundColor="$primary"
        borderRadius={25}
        justifyContent="center"
        alignItems="center"
        marginTop={-20}
      >
        <Ionicons name="add" size={24} color="white" />
      </YStack>
      <Ionicons name="stats-chart-outline" size={24} color="gray" />
      <Ionicons name="person-outline" size={24} color="gray" />
    </XStack>
  );
};

export default NavigationBar;
