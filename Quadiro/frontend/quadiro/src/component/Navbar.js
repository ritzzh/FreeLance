import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul>
        {!token ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
