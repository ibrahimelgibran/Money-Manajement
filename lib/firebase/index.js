// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmGCVfOcKWlDl2qDa1JewY6UdBUgQcS08",
  authDomain: "money-manajement.firebaseapp.com",
  projectId: "money-manajement",
  storageBucket: "money-manajement.appspot.com",
  messagingSenderId: "983567085442",
  appId: "1:983567085442:web:7cfb443f05574ad359a99b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
