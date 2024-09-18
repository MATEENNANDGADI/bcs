import React from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './AdminSignIn.css'; // Import AdminSignIn CSS

function AdminSignIn() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate('/admin/dashboard'); // Redirect after successful sign-in
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }

  return (
    <div className="admin-signin-container">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default AdminSignIn;
