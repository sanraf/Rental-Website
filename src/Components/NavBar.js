import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Styles/NavBar.css'
import '../Styles/Default.css'
import logo from '../Assets/logo4.png'
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <nav  className="navbar" >
    <div className="logo-hamburger">

        <div className="navbar-logo">
          {/* <p>Rosie</p> */}
          <img src={logo} alt='logo'/>
          </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen  ? faTimes : faBars} className="icon" />
        </div>

    </div>

    <div className={`navbar-links ${isOpen ? "open" : ""}`}>
      <ul >
        <li onClick={toggleMenu}>
          <a href="#myhome">Home</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#myabout">Gallery</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#myskills">Events</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#myproject">Product</a>
        </li>
        <li onClick={toggleMenu} className="last-li">
          <a href="#mycontact">Contact</a>
        </li>
      </ul>

    </div>
  </nav>
  )
}

export default NavBar