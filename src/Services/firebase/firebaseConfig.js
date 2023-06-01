
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9ovwi_KeqXscscYJkUpUS6qfHmGqOLoc",
  authDomain: "pro-hardware.firebaseapp.com",
  projectId: "pro-hardware",
  storageBucket: "pro-hardware.appspot.com",
  messagingSenderId: "789048477691",
  appId: "1:789048477691:web:6337e69b8ac128430fad5e",
  measurementId: "G-1B4RJRKJGL"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

