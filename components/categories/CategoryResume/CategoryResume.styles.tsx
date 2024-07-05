import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    padding: 12,
  },
  flatlist: {
    maxHeight: "88%",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryContent: {
    flex: 1,
    minWidth: 180,
    height: 56,
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 8,
    overflow: "hidden",
  },
  separator: {
    backgroundColor: "#3936467e",
    height: "80%",
    alignSelf: "center",
    width: 1,
    marginHorizontal: 4,
  },
  title: {
    color: "#393646",
  },
  CategoryTitle: {
    color: "#111827",
    marginBottom: 8,
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default styles;
