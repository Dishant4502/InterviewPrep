import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD8HefCLiY95AA7Znl8tfXCJ4fddimweOU",
  authDomain: "prepwise-2025dp.firebaseapp.com",
  projectId: "prepwise-2025dp",
  storageBucket: "prepwise-2025dp.firebasestorage.app",
  messagingSenderId: "612333307129",
  appId: "1:612333307129:web:897526cdab82c058aa8e28",
  measurementId: "G-DYN6KJVJKH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);