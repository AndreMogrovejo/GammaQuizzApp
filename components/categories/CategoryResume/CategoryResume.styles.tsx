import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 12,
    borderRadius: 8,
    padding: 12
  },
  flatlist: {
    maxHeight: "88%"
  },
  categoryContainer: {
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
    color: "#111827"
  },
  CategoryTitle: {
    color: "#111827",
    marginBottom: 8
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
