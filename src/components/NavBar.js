import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div className='navbar navbar-light bg-light'>
        <NavLink className="navbar-brand" to="/">
          <img src="/favicon.ico" width="30" height="30" alt=""/>
        </NavLink>
        <ul className='nav mr-auto'>
          <NavLink className='nav-link' to="/blog">Blog </NavLink>
          <NavLink className='nav-link' to="/Projects">Projects </NavLink>
          <NavLink className='nav-link' to="/Contact">Contact </NavLink>
        </ul>
        <span className='navbar-text col'> MEMOIRS OF A FREEMAN</span>
      </div>
    );
  }

}

export default NavBar;
