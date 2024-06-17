// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAD5aBeT_oip0hmI7JbThTi9uUqypDO_T8",
  authDomain: "qwerty-f0029.firebaseapp.com",
  projectId: "qwerty-f0029",
  storageBucket: "qwerty-f0029.appspot.com",
  messagingSenderId: "1086242345494",
  appId: "1:1086242345494:web:155e39009cb04e03ffdb37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
