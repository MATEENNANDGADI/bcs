import React from 'react';
import { auth, db } from './firebaseConfig';  // Import auth and db from firebaseConfig
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Signup() {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;

      // Store additional user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name.value,
        email: email.value
      });

      // Redirect to a different page after successful sign-up
      navigate('/dashboard');  // Use navigate instead of history.push
    } catch (error) {
      // Handle errors
      alert('Error: ' + error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
