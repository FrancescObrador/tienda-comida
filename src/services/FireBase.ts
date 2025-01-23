// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh8TVSo9aV1t6qdcxSF4O_6robg2mapRM",
  authDomain: "diri-react-1.firebaseapp.com",
  databaseURL: "https://diri-react-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diri-react-1",
  storageBucket: "diri-react-1.firebasestorage.app",
  messagingSenderId: "623101212387",
  appId: "1:623101212387:web:f8a6a089193baea96277d6",
  measurementId: "G-MPXY4KEM80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getDatabase(app);
