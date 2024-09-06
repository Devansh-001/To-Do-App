import React from 'react'
import todoLogo from '../assets/todoLogo.png';
import "../App.css"


const NavBar = () => {
  return (
    <nav>
      <h1>Daily Planner</h1>
      <img src={todoLogo} alt="My Logo" />
    </nav>
  )
}

export default NavBar
