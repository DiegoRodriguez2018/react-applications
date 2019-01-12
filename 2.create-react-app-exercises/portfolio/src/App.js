import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Project from './Project.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Project 
            name="Rails Project"
            description ="rails" />
            <Project name="Holiday Project"
            description= "in React"  />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
