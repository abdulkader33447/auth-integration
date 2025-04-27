// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DANGER DONOT SHARE CONFIG IN PUBLIC

const firebaseConfig = { 
  apiKey: "AIzaSyBwbrdTiEjU70wXJx2FaBaguKCq9zP6XDQ",
  authDomain: "auth-integration-dc0fe.firebaseapp.com",
  projectId: "auth-integration-dc0fe",
  storageBucket: "auth-integration-dc0fe.firebasestorage.app",
  messagingSenderId: "792490521056",
  appId: "1:792490521056:web:240077ee4bc7d35a4e3b85"

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);