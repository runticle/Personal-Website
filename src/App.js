import React, { Component } from 'react';

import NavBar from './components/NavBar'
import AppRouter from './routers/AppRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter/>
      </div>
    );
  }
}

export default App;
