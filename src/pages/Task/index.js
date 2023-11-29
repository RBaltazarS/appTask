import React from 'react';
//React Native
import { View, Text, TouchableOpacity, FlatList } from "react-native";
//Hooks
import { useState, useEffect } from "react";
//Styles
import styles from "./style"
//Icons
import { FontAwesome } from "@expo/vector-icons"
//Firebase
import firebase from "../../config/firebase/"


export default function Task({ navigation }) {
  const database = firebase.firestore()


  const [task, setTask] = useState([])


  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete()
  }


  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
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
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}