import { Platform, StyleSheet } from "react-native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Quizzes from "@/components/Quizzes/Quizzes";

export default function QuizzesScreen() {
  return (
    <View style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" style="dark" />
      <Quizzes />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
