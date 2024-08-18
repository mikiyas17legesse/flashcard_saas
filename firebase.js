// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwU-3Hyvorbb5ni8elIKgqGQ7gawzJEA",
  authDomain: "flashcardsaas-67663.firebaseapp.com",
  projectId: "flashcardsaas-67663",
  storageBucket: "flashcardsaas-67663.appspot.com",
  messagingSenderId: "406441285415",
  appId: "1:406441285415:web:c270764f09af3102cb7b02",
  measurementId: "G-B06GWB06RJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
