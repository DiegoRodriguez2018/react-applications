import React, { Component } from 'react';

// const Button = (props) => {
//   return <button>I have been clicked {props.numOfClicks} times</button>;
// }

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0
    }
  }
  incrementClicks() {
    const currentNum = this.state.numOfClicks;
    this.setState({ numOfClicks: currentNum + 1});
    this.props.increaseClick()
    this.props.updateSpecies(this.props.specie, 1)
  }

  decrementClicks() {
    const currentNum = this.state.numOfClicks;
    if (currentNum<=0){
        return 
    }
    this.setState({ numOfClicks: currentNum - 1});
    this.props.decreaseClick()
    this.props.updateSpecies(this.props.specie, -1)

  }

  render() {
    return (
        <div>
            <button onClick={this.incrementClicks.bind(this)}>
            {this.props.label}
            </button>
            <h4>Number of {this.props.label}: {this.state.numOfClicks} </h4>
            <button onClick={this.decrementClicks.bind(this)}>
            Kill animal
            </button>
        </div>
    )
    
  }
}

export default Button;