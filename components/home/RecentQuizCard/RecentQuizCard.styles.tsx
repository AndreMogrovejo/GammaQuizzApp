import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffccd5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  title: {
    fontSize: 14,
    color: "hsla(349, 100%, 20%, 1)",
    fontWeight: "bold",
    opacity: 0.5,
    paddingBottom: 8,
  },
  nameQuiz: {
    fontSize: 18,
    color: "hsla(349, 100%, 20%, 1)",
    fontWeight: "bold",
  },
});

export default styles;
