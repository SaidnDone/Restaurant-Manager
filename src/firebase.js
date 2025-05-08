// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUClxSmWAKM1a39UJTL5SrkfrFHymxcYk",
  authDomain: "restaurant-manager-bf337.firebaseapp.com",
  projectId: "restaurant-manager-bf337",
  storageBucket: "restaurant-manager-bf337.firebasestorage.app",
  messagingSenderId: "480743157775",
  appId: "1:480743157775:web:ea44e3b7d2ad2ca8cef37a",
  measurementId: "G-K7S7MKR1NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { firebaseConfig, auth, db };
