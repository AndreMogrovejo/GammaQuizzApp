import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FD6D6A",
    paddingTop: 64,
    paddingBottom: 24,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 12,
  },
  name: {
    maxWidth: "68%",
  },
  greetings: {
    flex: 1,
  },
});

export default styles;
