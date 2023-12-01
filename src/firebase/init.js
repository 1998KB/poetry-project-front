// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfZk2Y9czM3yHiYz0ajLN7MNX37ux6j8A",
  authDomain: "poetry-e04c9.firebaseapp.com",
  projectId: "poetry-e04c9",
  storageBucket: "poetry-e04c9.appspot.com",
  messagingSenderId: "240133355608",
  appId: "1:240133355608:web:27b13177767b2860bab22d",
  measurementId: "G-BK8K5M4ZK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
