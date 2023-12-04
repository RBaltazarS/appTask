import React from 'react';
//React Native
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, FlatList, Platform } from "react-native";
//Hooks
import { useState, useEffect } from "react";
//Styles
import styles from "./style"
//Icons
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
//Firebase
import firebase from "../../config/firebase/"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorRegister, setErrorRegister] = useState("")


  const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid })
      })
      .catch((error) => {
        setErrorRegister(true)
        let errorCode = error.code;
        let errorMessage = error.message;

      });
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Criar Conta Task</Text>

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

      {errorRegister === true
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
          style={styles.buttonRegister}
          disabled={true}
        >
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={register}
        >
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity>
      }
      <Text style={styles.login}>
        Já Tenho Registro?...
        <Text
          style={styles.linkRegister}
          onPress={() => navigation.navigate("Login")}
        >
          Login!
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}