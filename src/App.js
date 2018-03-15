import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from './components/navbar/navbar'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;