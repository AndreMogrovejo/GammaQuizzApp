import { FontAwesome } from "@expo/vector-icons";
import { User } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Button, Text, Theme, View } from "tamagui";

import UserInfo from "@/components/UserInfo/UserInfo";
import CategoryResume from "@/components/categories/CategoryResume/CategoryResume";
import RecentQuizCard from "@/components/home/RecentQuizCard/RecentQuizCard";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <UserInfo />
      <Theme name="dark">
        <View style={styles.recentContainer}>
          <RecentQuizCard />
        </View>

        <View style={styles.buttons}>
          <Button
            style={styles.button}
            variant="outlined"
            onPress={() => {
              router.push("/categories");
            }}
            icon={<FontAwesome name="plus" size={25} color="#FD6D6A" />}
          >
            Add Category
          </Button>
          <Button
            style={styles.button}
            variant="outlined"
            onPress={() => {
              router.push("/quizzes");
            }}
            icon={<FontAwesome name="plus" size={25} color="#FD6D6A" />}
          >
            Add Quiz
          </Button>
        </View>
      </Theme>
      <CategoryResume />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  recentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "center",
    width: "94%",
    color: "#FD6D6A",
    borderColor: "#FD6D6A",
  },
  buttonLogout: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    marginTop: 24,
  },
  buttons: {
    gap: 16,
  },
});
