// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVzQDzBFHLUfaMiiBICojZYpeZJlkqNDc",
  authDomain: "bcs-mateen.firebaseapp.com",
  projectId: "bcs-mateen",
  storageBucket: "bcs-mateen.appspot.com",
  messagingSenderId: "83557732514",
  appId: "1:83557732514:web:6965cd851eaeee968a07fb",
  measurementId: "G-HYGKHBLFLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);