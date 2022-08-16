// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYe9o9O0YZNWq5hV0nGJDXFOeeaAQdx1k",
  authDomain: "at2-crud.firebaseapp.com",
  projectId: "at2-crud",
  storageBucket: "at2-crud.appspot.com",
  messagingSenderId: "851816863929",
  appId: "1:851816863929:web:8042c9edf4ab060405e368"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
