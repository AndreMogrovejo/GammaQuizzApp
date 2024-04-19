import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "lightgrey"
  },
  button: {
    marginRight: 8
  },
  title: {
    color: "black"
  },
  description: {
    color: "grey"
  },
  amount: {
    color: "black",
    fontSize: 10
  },
  category: {
    color: "black",
    fontSize: 10
  },
  descriptionInformation: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;
