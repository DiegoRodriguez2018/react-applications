import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0
    }
  }
  handleClick() {
    console.log('updating value')
    const currentTotal = this.state.totalClicks;
    this.setState({ totalClicks: currentTotal + 1 });
  }
  render() {
    return (
      <div className="App">
      <h1>Total number of clicks is: {this.state.totalClicks}</h1>
        <Button updateClick={this.handleClick.bind(this)} />
        <Button updateClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;