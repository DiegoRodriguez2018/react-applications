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
    this.props.updateClick()
  }
  render() {
    return (
        <div>
            <button onClick={this.incrementClicks.bind(this)}>
            {this.props.label}
            </button>
            <h4>Number of {this.props.label}: {this.state.numOfClicks} </h4>
        </div>
    )
    
  }
}

export default Button;