import { useAuthStore } from "@/stores/auth/auth.store";
import React from "react";
import { YStack, Text, Image } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const ProfileSection = () => {
  const user = useAuthStore((state) => state.user);
  const { email } = user ?? {};
  const name = email?.split("@")[0] ?? "";

  return (
    <YStack
      alignItems="center"
      backgroundColor="#FD6D6A"
      paddingVertical="$10"
      style={{
        marginBottom: 20,
        borderEndEndRadius: 20,
        borderEndStartRadius: 20,
      }}
    >
      <YStack position="relative">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          width={80}
          height={80}
          borderRadius={40}
        />
        <Ionicons
          name={"flag"}
          size={24}
          color="red"
          position="absolute"
          bottom={0}
          right={0}
          width={24}
          height={24}
        />
      </YStack>
      <Text color="white" marginTop="$3" fontSize="$6" fontWeight="bold">
        {name}
      </Text>
    </YStack>
  );
};

export default ProfileSection;
