import { LogOut, User } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, H3, H5, YStack } from "tamagui";
import { Spinner } from "tamagui";

import { supabase } from "../supabase";

import { Text, View } from "@/components/Themed";
import { useAuthStore } from "@/stores/auth/auth.store";

export default function ProfileScreen() {
  const [loading, setLoading] = useState(false);
  const setIsAnonymous = useAuthStore((state) => state.setIsAnonymous);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const { email } = user ?? {};
  const name = email?.split("@")[0] ?? "";
  const uppercaseName = name?.charAt(0)?.toUpperCase() + name?.slice(1);

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      console.error("Error logging out:", error.message);
      return;
    }
    setUser(undefined);
    setIsAnonymous(true);
  };

  const renderLogoutUserComponent = () => {
    if (isAnonymous)
      return (
        <Button
          onPress={() => {
            router.navigate("/login");
          }}
          style={[styles.button]}
          icon={User}
          disabled={loading}
        >
          <Text style={{ color: "#fff" }}>Go to Login</Text>
        </Button>
      );
    return (
      <Button
        style={[styles.button]}
        icon={loading ? <Spinner size="small" color="$gray10" /> : LogOut}
        onPress={handleLogout}
        disabled={loading}
      >
        <Text style={{ color: "#fff" }}>
          {loading ? "loading..." : "Logout"}
        </Text>
      </Button>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <Link href="/terms/">
        <Text
          style={{
            color: "#007AFF",
            fontSize: 16,
            textDecorationLine: "underline",
          }}
        >
          Terms and conditions
        </Text>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <YStack alignItems="center">
        <Avatar circular size="$10" style={styles.image}>
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <H3 color="black">Hello{`, ${uppercaseName}!`}</H3>
        <H5 style={styles.name} color="black">
          {email}
        </H5>
      </YStack>
      {renderLogoutUserComponent()}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {renderTermsAndConditions()}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 64,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    borderWidth: 4,
    borderColor: "#FD6D6A",
  },
  name: {
    marginBottom: 80,
    color: "#FD6D6A",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#FD6D6A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
