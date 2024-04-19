import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: 16
  },
  title: {
    fontSize: 16,
    marginBottom: 16
  },
  buttonText: {
    fontSize: 16,
    color: "white"
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "black"
  }
});

export default styles;
