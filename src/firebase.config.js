// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYEYmkI5L4QVQ6JjiVp83lrhNmDKuedVo",
  authDomain: "exclusive-2402-89d9d.firebaseapp.com",
  projectId: "exclusive-2402-89d9d",
  storageBucket: "exclusive-2402-89d9d.firebasestorage.app",
  messagingSenderId: "382466518955",
  appId: "1:382466518955:web:2362ffd7cfc3dc13062cee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)