import React from 'react';
import '../styles/Hero.css';
import logo from '../assets/logo.jpg'; // Adjust the path to your logo file
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div className="hero-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="hero">
        <h1>FITNESS</h1>
        <h2>LOVE YOUR BODY AND SPIRIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link className='cta-button' to='/Booking'>BOOK NOW</Link>
      </div>
    </div>
  );
}

export default Hero;
