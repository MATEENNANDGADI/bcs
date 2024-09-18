import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVzQDzBFHLUfaMiiBICojZYpeZJlkqNDc",
    authDomain: "bcs-mateen.firebaseapp.com",
    projectId: "bcs-mateen",
    storageBucket: "bcs-mateen.appspot.com",
    messagingSenderId: "83557732514",
    appId: "1:83557732514:web:6965cd851eaeee968a07fb",
    measurementId: "G-HYGKHBLFLX"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
