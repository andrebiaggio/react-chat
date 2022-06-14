import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


import "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyDoro-453ar1gR69kbnOo6ir9DGJx_fR_U",
  authDomain: "chat-f1bbd.firebaseapp.com",
  projectId: "chat-f1bbd",
  storageBucket: "chat-f1bbd.appspot.com",
  messagingSenderId: "678191337838",
  appId: "1:678191337838:web:95103dd356910f0397717f",
  measurementId: "G-XP8XEXPJ5Z",
})

export const auth = getAuth();

export const db = getFirestore(app);