// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJbo_ECeoHRhvp9bwIH2ID438lVMHqfaQ",
  authDomain: "summarist-internship-52e88.firebaseapp.com",
  projectId: "summarist-internship-52e88",
  storageBucket: "summarist-internship-52e88.firebasestorage.app",
  messagingSenderId: "589538935040",
  appId: "1:589538935040:web:bc65b3e1653b60e10733e5",
  measurementId: "G-JGZ94N84KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app)