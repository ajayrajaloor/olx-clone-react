import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbewi68W-NdWfwpW7JnC9A0m7nLzCXB1A",
    authDomain: "olx-demo-83e4a.firebaseapp.com",
    projectId: "olx-demo-83e4a",
    storageBucket: "olx-demo-83e4a.appspot.com",
    messagingSenderId: "995354208554",
    appId: "1:995354208554:web:890c055416701f7d275653",
    measurementId: "G-XM8JBX6JXH"
  };


export default firebase.initializeApp(firebaseConfig)