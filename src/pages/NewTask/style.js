import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  label: {
    width: "90%",
    marginTop: "20",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    color: "#FF725E"
  },
  input: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#FF725E",
    marginLeft: "auto",
    marginRight: "auto",
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
    alignItems: "center",
  },
  iconButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
})

export default styles