// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// getFirestore
import { getFirestore } from "firebase/firestore";
// Auth
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCilWHj6nGvzC5PwcpcAdlSQ6udNDrGTUY",
  authDomain: "usingfirebase-29709.firebaseapp.com",
  projectId: "usingfirebase-29709",
  storageBucket: "usingfirebase-29709.appspot.com",
  messagingSenderId: "179748530376",
  appId: "1:179748530376:web:171bcd740a55e71dbe5dfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = getFirestore(app);
export let auth = getAuth(app);
