import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hyderabad</h1>
        </header>
        <Map />       
      </div>
    );
  }
}

export default App;
