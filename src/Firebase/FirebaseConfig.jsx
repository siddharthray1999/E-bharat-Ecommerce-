// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhlAABwV3ylvmOQlZ5G08-aQujOYS0ik",
  authDomain: "ecommerce-5b920.firebaseapp.com",
  projectId: "ecommerce-5b920",
  storageBucket: "ecommerce-5b920.appspot.com",
  messagingSenderId: "1060000214341",
  appId: "1:1060000214341:web:0ad2be55df68b0023ea22c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;