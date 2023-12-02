// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-c4955.firebaseapp.com",
  projectId: "mern-state-c4955",
  storageBucket: "mern-state-c4955.appspot.com",
  messagingSenderId: "793707996795",
  appId: "1:793707996795:web:a6e7793caa9ce26523e4de"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);