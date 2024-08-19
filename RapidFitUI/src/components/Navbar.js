import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import About from '../assets/about.png'
import calculator from '../assets/calculator.png'
import ai from '../assets/ai.png'
import shop from '../assets/shop.png'
import gym from '../assets/gym.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-links">
               <Link to='/Hero'><img src={gym} alt="" /></Link> 
               <Link to='/Calculator'><img src={calculator} alt="" /></Link> 
               <Link to='/Ai'><img src={ai} alt="" /></Link> 
               <Link to='/Shop'><img src={shop} alt="" /></Link> 
               <Link to='/About'><img src={About} alt="" /></Link> 
        </div>
    </div>
  )
}

export default Navbar