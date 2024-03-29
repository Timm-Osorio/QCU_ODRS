// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOq4sLU4bb07wwSX4OftyndDKYo93GzHw",
  authDomain: "qcu-odrs.firebaseapp.com",
  projectId: "qcu-odrs",
  storageBucket: "qcu-odrs.appspot.com",
  messagingSenderId: "1021314388420",
  appId: "1:1021314388420:web:6715d2f4deb7524e1c5491"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)