import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    clicked: 0
  }
  clicked =  () => {
    let totalClicks = this.state.clicked
    totalClicks++
    this.setState({ clicked: totalClicks })
  }
  render() {
    return (
      <div className="App">
        <p>Hello! The button has been clicked { this.state.clicked } times</p>
        <button onClick={this.clicked}>Click me</button>
      </div>
    );
  }
}


export default App;