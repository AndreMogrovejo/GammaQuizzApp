import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, H3, View, XStack } from "tamagui";

import styles from "./UserInfo.styles";

import { useAuthStore } from "@/stores/auth/auth.store";

const UserInfo = () => {
  const user = useAuthStore(state => state.user);
  const { email } = user ?? {};
  const name = email?.split("@")[0] ?? "";
  const uppercaseName = name?.charAt(0)?.toUpperCase() + name?.slice(1);

  return (
    <View style={styles.container}>
      <XStack alignItems="center" gap="$4">
        <Avatar circular size="$6" borderWidth="$1" borderColor="white">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <H3 style={styles.name} color="white">
          Hello{`, ${uppercaseName}!`}
        </H3>
      </XStack>
      <TouchableOpacity
        onPress={() => {
          router.push("/profile");
        }}
      >
        <FontAwesome name="gear" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
