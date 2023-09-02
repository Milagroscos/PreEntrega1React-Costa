// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS4DQOr0ERfpVtDJDjbAKyS6ehmXSeRO0",
  authDomain: "decohouse-fcd05.firebaseapp.com",
  projectId: "decohouse-fcd05",
  storageBucket: "decohouse-fcd05.appspot.com",
  messagingSenderId: "752834315753",
  appId: "1:752834315753:web:235ff2a3349237829ef778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)