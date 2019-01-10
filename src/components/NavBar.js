import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div id='navigation-bar'>
        <NavLink to="/blog">Blog </NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }

}

export default NavBar;
