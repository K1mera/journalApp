// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc6v4TdLi_ufcX5PlLpfUIopId3D_4Abo",
  authDomain: "react-courses-38c5b.firebaseapp.com",
  projectId: "react-courses-38c5b",
  storageBucket: "react-courses-38c5b.appspot.com",
  messagingSenderId: "951583856233",
  appId: "1:951583856233:web:2c7d6fe2a79a960651f4f8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );
