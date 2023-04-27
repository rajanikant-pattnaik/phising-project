// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDZrr5T4RKuMsngiRY8XA3QSOaxbh-3wwI",
  authDomain: "kavach-82b2b.firebaseapp.com",
  projectId: "kavach-82b2b",
  storageBucket: "kavach-82b2b.appspot.com",
  messagingSenderId: "316135355764",
  appId: "1:316135355764:web:2024f17590b1374a5b2821",
  measurementId: "G-BW1BVGKJB0"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);