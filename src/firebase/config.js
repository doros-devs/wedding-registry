// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY``

const firebaseConfig = {
  apiKey:apiKey,
  authDomain: "wedding-registry-20e65.firebaseapp.com",
  projectId: "wedding-registry-20e65",
  storageBucket: "wedding-registry-20e65.appspot.com",
  messagingSenderId: "1041199169815",
  appId: "1:1041199169815:web:e12e62b03d5a16a864f752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

