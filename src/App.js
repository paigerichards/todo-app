import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hasta la vista</h2>
        </div>
        <Checkbox label='Checked!' checked={ true }/>
        <Checkbox label='Unchecked!' checked={ false }/>
      </div>
    );
  }
}

export default App;
