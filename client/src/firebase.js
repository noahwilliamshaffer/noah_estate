// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c1d11.firebaseapp.com",
  projectId: "mern-estate-c1d11",
  storageBucket: "mern-estate-c1d11.appspot.com",
  messagingSenderId: "715936191842",
  appId: "1:715936191842:web:fa8e406cd566cab1dc483b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);