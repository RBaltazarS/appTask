import React from 'react';
//React Native
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from "react-native";
//Hooks
import { useState, useEffect } from "react";
//Styles
import styles from "./style"
//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons"
//Firebase
import firebase from "../../config/firebase/"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState("")


  const loginFirebase = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user, uid })

      })
      .catch((error) => {

        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Task", { idUser: user.uid })
      }
    });
  }, [])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>TASK</Text>

      <TextInput
        style={styles.input}
        placeholder='Email...'
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Senha'
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name='alert-circle'
            size={24}
            color="#202020"
          />
          <Text style={styles.warningAlert}>Email ou Senha Invalida</Text>
        </View>
        :
        <View />
      }

      {email === "" || password === ""
        ?
        <TouchableOpacity
          style={styles.buttonLogin}
          disabled={true}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={loginFirebase}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      }
      <Text style={styles.registration}>
        Não Tem Registro?...
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("NewUser")}
        >
          Inscreva-se Já!
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}