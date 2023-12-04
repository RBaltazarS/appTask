import React from 'react';
//React Native
import { View, Text, TouchableOpacity, FlatList } from "react-native";
//Hooks
import { useState, useEffect } from "react";
//Styles
import styles from "./style"
//Icons
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
//Firebase
import firebase from "../../config/firebase/"
import { getAuth, signOut } from "firebase/auth";


export default function Task({ navigation, route }) {

  const [task, setTask] = useState([])
  const database = firebase.firestore()

  function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate("Login")
    }).catch((error) => {

    });

  }

  function deleteTask(id) {
    database.collection(route.params.idUser).doc(id).delete()
  }


  useEffect(() => {
    database.collection(route.params.idUser).onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setTask(list)
    })
  }, [])


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={(item) => {
          return (
            <View style={styles.tasks}>

              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id)
                }}
              >
                <FontAwesome
                  name="star"
                  size={24}
                  color="#FF725E"
                >
                </FontAwesome>
              </TouchableOpacity>

              <Text
                style={styles.descriptionTask}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    idUser: route.params.idUser
                  })
                }}
              >
                {item.description}
              </Text>

            </View>
          )
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task", { idUser: route.params.idUser })}
      >
        <Text style={styles.iconButton}>
          +
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => { logout() }}
      >
<Text style={styles.iconButtonLogout}>
  <MaterialCommunityIcons
  name='location-exit'
  size={23}
  color="#FF725E"
  />
</Text>
      </TouchableOpacity>
    </View>
  )
}