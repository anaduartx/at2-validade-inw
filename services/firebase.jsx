// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD8o0SwllkypzaVfPv-P8ajD9TytDvOkq4",
  authDomain: "at2-validade.firebaseapp.com",
  projectId: "at2-validade",
  storageBucket: "at2-validade.appspot.com",
  messagingSenderId: "440188035909",
  appId: "1:440188035909:web:fd78e41db76e36befbd42c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
