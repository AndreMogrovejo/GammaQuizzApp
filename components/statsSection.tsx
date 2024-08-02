import React from "react";
import { YStack, Text } from "tamagui";

const StatsSection = () => {
  return (
    <YStack
      flexDirection="row"
      justifyContent="space-around"
      backgroundColor="#ffb2ba"
      paddingVertical="$5"
      borderTopLeftRadius={30}
      borderTopRightRadius={30}
    >
      <YStack alignItems="center">
        <Text color="hsla(349, 100%, 20%, 1)" fontSize="$3">
          Puntos
        </Text>
        <Text color="white" fontSize="$4" fontWeight="bold">
          590p
        </Text>
      </YStack>
      <YStack alignItems="center">
        <Text color="hsla(349, 100%, 20%, 1)" fontSize="$3">
          Rango Mundial
        </Text>
        <Text color="white" fontSize="$4" fontWeight="bold">
          #1,438
        </Text>
      </YStack>
      <YStack alignItems="center">
        <Text color="hsla(349, 100%, 20%, 1)" fontSize="$3">
          Rango Local
        </Text>
        <Text color="white" fontSize="$4" fontWeight="bold">
          #56
        </Text>
      </YStack>
    </YStack>
  );
};

export default StatsSection;
