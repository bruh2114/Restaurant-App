// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD6xVECpXPc661uCrt-326uIoG23MAxzuQ",

  authDomain: "restaurant-app-560f9.firebaseapp.com",

  projectId: "restaurant-app-560f9",

  storageBucket: "restaurant-app-560f9.appspot.com",

  messagingSenderId: "882175314748",

  appId: "1:882175314748:web:19bb5833a4a1b8302dac39",

  measurementId: "G-HJL6NBX2YN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}