import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from './firebaseConfig';  // Import Firestore instance

const auth = getAuth();

export const signup = async (email, password, userData) => {
  try {
    // Step 1: Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    // Step 2: Add user data to Firestore
    await setDoc(doc(db, "users", userId), {
      email: email,
      name: userData.name,
      role: userData.role,  // For example, "admin" or "user"
      createdAt: new Date()
    });

    console.log("User added to Firestore!");
  } catch (error) {
    console.error("Error during sign up:", error);
  }
};
