import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalsInTheZoo: 0
    }
  }
  handleClick() {
    console.log('updating value')
    const currentTotal = this.state.animalsInTheZoo;
    this.setState({ animalsInTheZoo: currentTotal + 1 });
  }
  render() {
    return (
      <div className="App">
        <h1>Number of Animals in the Zoo: {this.state.animalsInTheZoo}</h1> 
        <Button label="Monkeys" updateClick={this.handleClick.bind(this)} />
        <Button label="Tiger" updateClick={this.handleClick.bind(this)} />

      </div>
    );
  }
}

export default App;
