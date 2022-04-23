// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfdgIUfzUR5COYB9FopZ8qWb8IuriAaOQ",
  authDomain: "crudproyecto2.firebaseapp.com",
  projectId: "crudproyecto2",
  storageBucket: "crudproyecto2.appspot.com",
  messagingSenderId: "306791945705",
  appId: "1:306791945705:web:84cb2ff52f5b8dc93d2778"
};

// Initialize Firebase\
firebase.initializeApp(firebaseConfig);
export {firebase}