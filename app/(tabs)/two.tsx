import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { TamaguiProvider, XStack, YStack } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "@/components/new_header";
import ProfileSection from "@/components/profileSection";
import StatsSection from "@/components/statsSection";
import BadgeSection from "@/components/badgeSection";
import NavigationBar from "@/components/navigationBar";
import config from "../../tamagui.config";
import RecentQuizCard from "@/components/home/RecentQuizCard/RecentQuizCard";

export default function TabTwoScreen() {
  return (
    <SafeAreaProvider>
      <YStack flex={1} backgroundColor="white">
        <ProfileSection />
        <StatsSection />
        <BadgeSection />
        <XStack
          style={{
            paddingHorizontal: 8,
          }}
        >
          <RecentQuizCard />
        </XStack>
      </YStack>
    </SafeAreaProvider>
  );
}
