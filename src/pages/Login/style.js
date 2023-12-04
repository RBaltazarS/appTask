import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 0 : 50
  },
  title: {
    fontSize: 48,
    color: "#FF725E",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#FF725E",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#202020",
  },
  buttonLogin: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF725E",
    borderRadius: 50,
    marginTop: 30,
  },
  textButtonLogin: {
    color: "#FFF",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#202020",
    fontSize: 16,
  },
  registration: {
    marginTop: 20,
    color: "#FF725E",
  },
  linkSubscribe: {
    color: "#1877f2",
    fontSize: 16,
  },
})

export default styles