import React from "react";
import { YStack, Text, XStack, Image } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const BadgeSection = () => {
  const badges = [
    { color: "#99e7d9", icon: "book" },
    { color: "#fdd27e", icon: "home" },
    { color: "#b2dffc", icon: "heart" },
    { color: "#ffb2ba", icon: "star" },
    { color: "#bbb4ff", icon: "search" },
  ];

  return (
    <YStack paddingHorizontal="$4" paddingVertical="$5">
      <XStack justifyContent="space-around" marginBottom="$5">
        <Text fontSize="$4" color="hsla(349, 100%, 20%, 1)">
          Historial
        </Text>
        <Text fontSize="$4" color="hsla(349, 100%, 20%, 1)">
          Estadísticas
        </Text>
        <Text fontSize="$4" color="hsla(349, 100%, 20%, 1)">
          Detalles
        </Text>
      </XStack>
      <XStack flexWrap="wrap" justifyContent="space-around">
        {badges.map((badge, index) => (
          <YStack
            key={index}
            backgroundColor={badge.color}
            width={70}
            height={70}
            borderRadius={35}
            justifyContent="center"
            alignItems="center"
            marginBottom="$4"
          >
            {/* @ts-ignore */}
            <Ionicons name={badge.icon} size={24} color="gray" />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};

export default BadgeSection;
