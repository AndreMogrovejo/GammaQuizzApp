import React, { useEffect } from "react";
import { Avatar, H3, H5, View, XStack, YStack } from "tamagui";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Easing, useAnimatedStyle } from "react-native-reanimated";
import styles from "./UserInfo.styles";
import { useAuthStore } from "@/stores/auth/auth.store";
import { FontAwesome } from "@expo/vector-icons";

const UserInfo = () => {
  const user = useAuthStore((state) => state.user);
  const { email } = user ?? {};
  const name = email?.split("@")[0] ?? "";
  const uppercaseName = name?.charAt(0)?.toUpperCase() + name?.slice(1);

  // Animation setup
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    translateY.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  return (
    <View style={[styles.container]}>
      <XStack alignItems="center" gap="$4">
        <Animated.View style={[styles.greetings, animatedStyle]}>
          <YStack style={styles.greetings}>
            <XStack gap="$2">
              <FontAwesome name="cloud" size={25} color="white" />
              <H5 style={styles.name} color="#FFF0DC">
                Good Morning
              </H5>
            </XStack>
            <H3 style={styles.name} color="white">
              Hello{`, ${uppercaseName}!`}
            </H3>
          </YStack>
        </Animated.View>
        <Animated.View style={animatedStyle}>
          <Avatar circular size="$6" borderWidth="$1" borderColor="#FFF0DC">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </Animated.View>
      </XStack>
    </View>
  );
};

export default UserInfo;
