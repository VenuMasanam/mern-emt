import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent default behavior of the link
    setShowDropdown(!showDropdown); // Toggle dropdown visibility for Signup
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MERN App</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="dropdown-container">
          <a href="/login" className="login-link">
            Login
          </a>
          <span
            className="signup-link"
            onClick={handleSignupClick} // Show dropdown for Signup only
          >
            / Signup
          </span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>Admin</li>
              <li>Event Organizer</li>
              <li>Customer</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;