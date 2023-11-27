// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByavO-E4xlkNthL_zPqFHM3fDwfJuSFp4",
  authDomain: "netflixgpt-ce54c.firebaseapp.com",
  projectId: "netflixgpt-ce54c",
  storageBucket: "netflixgpt-ce54c.appspot.com",
  messagingSenderId: "127052957238",
  appId: "1:127052957238:web:8791bb8d7a42a5b7e5fa97",
  measurementId: "G-4E88CDYCVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initi
export const auth = getAuth();