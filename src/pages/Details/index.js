//React Native
import { View, Text, TextInput, TouchableOpacity } from "react-native"
//Hooks
import { useState } from "react"
//Firebase
import firebase from "../../config/firebase/"
//Styles
import styles from "./style"

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id
  const database = firebase.firestore()


  function editTask(description, id) {
    database.collection(route.params.idUser).doc(id).update({
      description: descriptionEdit,
    })
    navigation.navigate("Task", { idUser: route.params.idUser })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar Programação"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}