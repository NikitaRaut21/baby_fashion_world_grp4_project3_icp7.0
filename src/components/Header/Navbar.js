
import React from 'react'
import "./navbar.css";

import {Link} from "react-router-dom";
import logo from "./img/logo-removebg-preview.png"
import user from "./img/login.png"
import cart from "./img/cart.png"

function Navbar() {
  return (
    <div className='Navbar-Container'>
      <img  src={logo} className="header-logo"/>
      <Link to ='/' className='nav-menu'>Home</Link>
      <Link to ='/blogs' className='nav-menu'>Blogs</Link>
      <Link to ='/about' className='nav-menu'>About</Link>
      <Link to ='/contact' className='nav-menu'>Contact</Link>
      <Link to ='/review' className='nav-menu'>Shopping List</Link>
      <img  src={user} className="userr-logo"/>
      <img  src={cart} className="cart-logo"/>
    </div>
  )
}

export default Navbar

