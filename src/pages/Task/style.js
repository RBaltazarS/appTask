import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 16,
  },
  tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  deleteTask: {
    justifyContent: "center",
    paddingLeft: 16,
  },
  descriptionTask: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#CCC",
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginBottom: 8,
    marginRight: 16,
    color:"#E10"
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
  buttonLogout: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLogout:{
    color:"#FFF",
    fontSize:25,
    fontWeight:"bold"
  },
  iconButton: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold"
  },
})

export default styles