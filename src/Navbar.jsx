import React from 'react';
import './Navbar.css'; // Import Navbar CSS
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar"> {/* Add className here */}
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/admin/signin">Admin Sign In</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin/dashboard">Admin Dashboard</Link>
    </nav>
  );
}

export default Navbar;
