import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleRedirect = (role) => {
    if (role) {
      window.location.href = `/signup?role=${role}`; // Redirects to the signup page with the role query
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <div className="dropdown">
            <span>Login/Signup</span>
            <div className="dropdown-content">
              <span onClick={() => handleRedirect('Admin')}>Admin</span>
              <span onClick={() => handleRedirect('Event Organizer')}>Event Organizer</span>
              <span onClick={() => handleRedirect('Customer')}>Customer</span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;