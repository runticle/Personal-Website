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
        <a href="https://www.linkedin.com/in/alfie-freeman-808166b9/" target="_block">
          <img src="/assets/In-2c-54px-TM.png" style={{width:'34px',marginRight:'5px'}}/>
        </a>
        <a href="https://www.github.com/runticle" target="_block">
          <img src="/assets/GitHub-Mark-64px.png" style={{width:'30px'}}/>
        </a>
      </div>
    );
  }

}

export default NavBar;
