// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPRqky7IykzEGYUdxwzpJ1ccjRoiVQbYI",
  authDomain: "usuarios-desafio-crud.firebaseapp.com",
  projectId: "usuarios-desafio-crud",
  storageBucket: "usuarios-desafio-crud.firebasestorage.app",
  messagingSenderId: "182351232859",
  appId: "1:182351232859:web:4573b5c37b8d4b49e4a47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
