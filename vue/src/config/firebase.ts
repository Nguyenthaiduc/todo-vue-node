import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIozI41AU_ePms5MpHDhl3WvBPTncV2D4",
  authDomain: "imoney-78143.firebaseapp.com",
  projectId: "imoney-78143",
  storageBucket: "imoney-78143.appspot.com",
  messagingSenderId: "260963186736",
  appId: "1:260963186736:web:fee1aa5c49d9c2d2ba95f5",
  measurementId: "G-54ZVB9684J"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectFirestore, projectAuth, timestamp };