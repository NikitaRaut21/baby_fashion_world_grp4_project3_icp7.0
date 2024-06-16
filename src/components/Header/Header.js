import React from 'react'
import "./Header.css";

import {Link} from "react-router-dom";


function Header() {
  return (
    <div className='Navbar-Container'>
      <Link to ='/' className='nav-menu'>Home</Link>
      <Link to ='/blogs' className='nav-menu'>Blogs</Link>
      <Link to ='/about' className='nav-menu'>About</Link>
      <Link to ='/contact' className='nav-menu'>Contact</Link>
      <Link to ='/review' className='nav-menu'>Review</Link>
    </div>
  )
}

export default Header
