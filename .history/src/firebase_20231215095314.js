// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "netflix2-0-ee170.firebaseapp.com",
  projectId: "netflix2-0-ee170",
  storageBucket: "netflix2-0-ee170.appspot.com",
  messagingSenderId: "574707602719",
  appId: "1:574707602719:web:57cca9770b88553c1acc2a",
  measurementId: "G-DQY4DYPY22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);