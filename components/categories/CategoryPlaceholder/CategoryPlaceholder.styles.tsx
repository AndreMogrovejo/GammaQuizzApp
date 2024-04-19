import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoryContentPlaceholder: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
    padding: 12
  },
  title: {
    height: "40%",
    width: "80%"
  },
  limit: {
    height: "40%",
    width: "60%",
    marginTop: 8
  },
  edit: {
    width: "40%",
    borderRadius: 4
  },
  delete: {
    width: "40%",
    borderRadius: 4
  },
  right: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  left: {
    flex: 1,
    flexDirection: "column"
  }
});

export default styles;
