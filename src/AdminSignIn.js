import React from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function AdminSignIn() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate('/admin/dashboard'); // Redirect to admin dashboard
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Admin Sign In</button>
    </form>
  );
}

export default AdminSignIn;
