import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 4,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: "lightgrey"
  },
  title: {
    color: "black"
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  }
});

export default styles;
