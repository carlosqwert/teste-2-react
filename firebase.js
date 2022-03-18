import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBxCGd9nXT8dEUQ7IJEN9jkZ4-mILcUnp8",
    authDomain: "unicode-44844.firebaseapp.com",
    projectId: "unicode-44844",
    storageBucket: "unicode-44844.appspot.com",
    messagingSenderId: "956015908721",
    appId: "1:956015908721:web:6141837634738b9cbb88d0"
  }).auth();