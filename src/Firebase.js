
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXPlILu1MEDn3T1S74596k2ZSUPokJmII",
  authDomain: "chatreact-9468a.firebaseapp.com",
  projectId: "chatreact-9468a",
  storageBucket: "chatreact-9468a.appspot.com",
  messagingSenderId: "491986677910",
  appId: "1:491986677910:web:2c867d1c0785e77ca692b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()