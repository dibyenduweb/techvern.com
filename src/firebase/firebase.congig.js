
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI9qrCvRU_Rr--t2XxezJqVkPqYa0ZLOc",
  authDomain: "techvern-3bb34.firebaseapp.com",
  projectId: "techvern-3bb34",
  storageBucket: "techvern-3bb34.appspot.com",
  messagingSenderId: "47440455467",
  appId: "1:47440455467:web:961823abbfa8ac7885c76e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
