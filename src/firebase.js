// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsFP-zqMd9aRe9JXADYeLzpDaeP5MPWI",
  authDomain: "famous01-06-2004.firebaseapp.com",
  projectId: "famous01-06-2004",
  storageBucket: "famous01-06-2004.appspot.com",
  messagingSenderId: "131176221711",
  appId: "1:131176221711:web:8d5549b5a64f49ea5f277a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);