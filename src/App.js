import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import SignIn from './Signin';
import AdminSignIn from './AdminSignIn';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import Navbar from './Navbar'; // Import your Navbar component

function App() {
  return (
    <>
      <Navbar /> {/* Render the Navbar */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
