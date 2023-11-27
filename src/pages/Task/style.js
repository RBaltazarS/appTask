import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "FFF",
    paddingTop: 16,
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#FF725E",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold"
  }
})

export default styles