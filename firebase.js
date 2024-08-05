
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFireBase, getFirestore}  from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa3Xrm7ju0i12WCtM05NHlbKF4im6iLo8",
  authDomain: "smart-pantry-manager-e9e6a.firebaseapp.com",
  projectId: "smart-pantry-manager-e9e6a",
  storageBucket: "smart-pantry-manager-e9e6a.appspot.com",
  messagingSenderId: "424349282037",
  appId: "1:424349282037:web:0b0a67bf5d893d00661fbc",
  measurementId: "G-PTS961YKZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export{firestore}
