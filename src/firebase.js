// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyCwmM7sLCEIf7Blp4yAPkt1qL6XA78B3oE",
  authDomain: "crud-basico-2c067.firebaseapp.com",
  projectId: "crud-basico-2c067",
  storageBucket: "crud-basico-2c067.appspot.com",
  messagingSenderId: "187804374732",
  appId: "1:187804374732:web:8f1ca32f982249b4ec9469"
};

// Initialize Firebase\
firebase.initializeApp(firebaseConfig);
export {firebase}