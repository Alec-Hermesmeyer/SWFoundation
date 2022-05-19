// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2IxcjI5DVKYpdYtK8sfRci1ivxnCQMOM",
  authDomain: "swfoundationblog.firebaseapp.com",
  projectId: "swfoundationblog",
  storageBucket: "swfoundationblog.appspot.com",
  messagingSenderId: "630757676797",
  appId: "1:630757676797:web:c4ef47448d7f1114a99094",
  measurementId: "G-LNQXRR2W85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();