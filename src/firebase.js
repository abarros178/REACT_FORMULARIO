// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDT0iA_Ar98RndQAC1Ph1i_qBm8LbI7GhY",
  authDomain: "react-proyecto-716ff.firebaseapp.com",
  projectId: "react-proyecto-716ff",
  storageBucket: "react-proyecto-716ff.appspot.com",
  messagingSenderId: "256372921671",
  appId: "1:256372921671:web:74af48a4eccc0c8a3da862"
};

// Initialize Firebase\
firebase.initializeApp(firebaseConfig);
export {firebase}