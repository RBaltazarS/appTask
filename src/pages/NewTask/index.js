//React Native
import { View, Text, TextInput, TouchableOpacity } from "react-native"
//Hooks
import { useState } from "react"
//Firebase
import firebase from "../../config/firebase/"
//Styles
import styles from "./style"

export default function NewTask({ navigation, route }) {
  const database = firebase.firestore()
  const [description, setDescription] = useState("")


  function addTask() {
    database.collection(route.params.idUser).add({
      description: description,
      status: false
    })
    navigation.navigate("Task",{idUser:route.params.idUser})
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar Programação"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}