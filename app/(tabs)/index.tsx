import { FontAwesome } from "@expo/vector-icons";
import { User } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Button, Text, Theme, View } from "tamagui";

import UserInfo from "@/components/UserInfo/UserInfo";
import CategoryResume from "@/components/categories/CategoryResume/CategoryResume";
import { useAuthStore } from "@/stores/auth/auth.store";

export default function TabOneScreen() {
  const isAnonymous = useAuthStore(state => state.isAnonymous);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />

      {isAnonymous ? (
        <>
          <Button
            onPress={() => {
              router.navigate("/login");
            }}
            style={styles.buttonLogout}
            icon={User}
          >
            <Text style={{ color: "#fff" }}>Go to Login</Text>
          </Button>
        </>
      ) : (
        <>
          <UserInfo />
          <Theme name="dark">
            <Button
              style={styles.button}
              variant="outlined"
              onPress={() => {
                router.push("/categories");
              }}
              icon={<FontAwesome name="plus" size={25} color="#111827" />}
            >
              Add Category
            </Button>
          </Theme>
          <CategoryResume />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    alignSelf: "center",
    width: "94%",
    color: "#111827",
    borderColor: "#111827"
  },
  buttonLogout: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    marginTop: 24
  }
});
