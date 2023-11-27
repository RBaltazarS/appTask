import firebase from "firebase/compat"
import "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyBN8k8yTHhZNAZXMA_P99O5bOstiKU5XMg",
  authDomain: "rn-apptask.firebaseapp.com",
  projectId: "rn-apptask",
  storageBucket: "rn-apptask.appspot.com",
  messagingSenderId: "672090935410",
  appId: "1:672090935410:web:fde66b05d4f06dc61ab2eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

export default database