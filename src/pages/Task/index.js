import React from 'react';
//React Native
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from "react-native";
//Hooks
import { useState, useEffect } from "react";
//Styles
import styles from "./style"
//Icons
import { FontAwesome } from "@expo/vector-icons"
//Firebase
import database from "../../config/firebaseconfig/"


export default function Task({ navigation }) {
  const [task, setTask] = useState([])


  function deleteeTask(id) {
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
      <FlatList />
      <TouchableOpacity style={styles.buttonNewTask}>
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}