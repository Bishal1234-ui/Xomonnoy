// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGW68BJnwjPqBaMB79hHEXgFC7ZpMzVVc",
  authDomain: "pyrokinesis.firebaseapp.com",
  projectId: "pyrokinesis",
  storageBucket: "pyrokinesis.appspot.com",
  messagingSenderId: "220355818293",
  appId: "1:220355818293:web:bbeff73e030505d58e927c",
  measurementId: "G-E8E1QK3NSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);