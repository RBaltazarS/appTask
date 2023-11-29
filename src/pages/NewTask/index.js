//React Native
import { View, Text, TextInput, TouchableOpacity } from "react-native"
//Hooks
import { useState } from "react"
//Firebase
import firebase from "../../config/firebase/"
//Styles
import styles from "./style"

export default function NewTask({ navigation }) {
  const database = firebase.firestore()

  
  const [description, setDescription] = useState(null)


  function addTask() {
    database.collection("Tasks").add({
      description: description,
      status: false
    })
    navigation.navigate("Task")
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