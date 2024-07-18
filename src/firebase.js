// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdewivlz43gP9KrcSOVghKQUhK-79pTq4",
  authDomain: "mytwitterclone-909f0.firebaseapp.com",
  projectId: "mytwitterclone-909f0",
  storageBucket: "mytwitterclone-909f0.appspot.com",
  messagingSenderId: "156446805278",
  appId: "1:156446805278:web:d1ba383f3752af0e8b8d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
