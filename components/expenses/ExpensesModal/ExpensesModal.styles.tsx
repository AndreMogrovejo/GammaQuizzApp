import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 80
  },
  createContainer: {
    alignItems: "center"
  },
  close: {
    alignSelf: "flex-end",
    fontSize: 24
  },
  title: {
    marginTop: 16
  },
  button: {
    alignSelf: "flex-end",
    marginRight: 8,
    marginTop: 16
  }
});

export default styles;
