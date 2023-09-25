import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4JyBnN_UnNIa16qF1pG7Uiqo7jo-TC-Q",
  authDomain: "line-clone-21d63.firebaseapp.com",
  projectId: "line-clone-21d63",
  storageBucket: "line-clone-21d63.appspot.com",
  messagingSenderId: "92951865615",
  appId: "1:92951865615:web:0409c83577007744dcb67a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};