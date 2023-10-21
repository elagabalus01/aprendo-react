// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0xTG6UHkb9XdPVcTqWrdgZv4hJUW1Ths",
  authDomain: "journal-prueba.firebaseapp.com",
  projectId: "journal-prueba",
  storageBucket: "journal-prueba.appspot.com",
  messagingSenderId: "668699272104",
  appId: "1:668699272104:web:63d174188e5d66f580b39d"
};

// Initialize Firebase
export const firebaseService = initializeApp(firebaseConfig);
export const firebaseAuthService = getAuth(firebaseService)
export const firebaseDb = getFirestore(firebaseService)
