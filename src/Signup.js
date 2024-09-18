import React from 'react';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import Signup CSS

function Signup() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;

      // Store additional user information in Firestore
      // Replace this with actual Firestore code if needed

      // Redirect to a different page after successful sign-up
      navigate('/dashboard'); // Use navigate instead of history.push
    } catch (error) {
      // Handle errors
      alert('Error: ' + error.message);
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
