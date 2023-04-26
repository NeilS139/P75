import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD8qfxHjM9aQ8DqWyqkHrqvnH8-AvhN-qE",
  authDomain: "pr75-b60d3.firebaseapp.com",
  projectId: "pr75-b60d3",
  storageBucket: "pr75-b60d3.appspot.com",
  messagingSenderId: "972760146920",
  appId: "1:972760146920:web:42130b80460433274eba5d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
