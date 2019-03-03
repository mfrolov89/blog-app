import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => (
  <nav>
    <ul className="nav_list">
      <li className="nav_list-item"><Link to='/' className="nav_list-item_link">Home</Link></li>
      <li className="nav_list-item"><Link to='/about' className="nav_list-item_link">About</Link></li>
    </ul>
  </nav>
)

export default Nav;