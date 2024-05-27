// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Zxdc_kRqqGGGooeC7J2dh08Fq3yEitA",
  authDomain: "transitrack-bf454.firebaseapp.com",
  databaseURL: "https://transitrack-bf454-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "transitrack-bf454",
  storageBucket: "transitrack-bf454.appspot.com",
  messagingSenderId: "770798147893",
  appId: "1:770798147893:web:eeb3ba505a82e769ec547c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;