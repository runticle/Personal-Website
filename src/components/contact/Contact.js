import React, { Component } from 'react';

import NavBar from '../NavBar'
import FormContainer from './form/form.container.js'

class Contact extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <FormContainer/>
      </div>
    );
  }

}

export default Contact;
