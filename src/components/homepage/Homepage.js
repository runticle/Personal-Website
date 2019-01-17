import React, { Component } from 'react';

import NavBar from '../NavBar'
import About from './About'

class Homepage extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <About/>
      </div>
    );
  }

}

export default Homepage;
