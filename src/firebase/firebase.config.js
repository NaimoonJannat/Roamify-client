import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAY8zO02ViOTEfA8S1e35wE5lAHub2a6NQ",
  authDomain: "atg-world-67b51.firebaseapp.com",
  projectId: "atg-world-67b51",
  storageBucket: "atg-world-67b51.firebasestorage.app",
  messagingSenderId: "517835207941",
  appId: "1:517835207941:web:6def35faef8629a761336c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default  auth;