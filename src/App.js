import React, { Component } from 'react';

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
