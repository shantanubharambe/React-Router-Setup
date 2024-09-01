import React from 'react'
import '../CSS/MenuBar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      
      <nav className="menu-bar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fIxhvupR7O9JAW0tQGgYirdL5XlEx353hQ&s " alt="RouterDemo Logo" className="logo-image" />
        <span className="logo-name">React Router Demo</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Navbar
