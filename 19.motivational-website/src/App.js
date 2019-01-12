import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {
    quote:"Loading..."
  }

  componentDidMount() {
    //axios.get request
    console.log("did mount");
    this.getQuote();
  }

  getQuote = () =>{
    const url = '/api/quotes';
    axios.get(url) 
    .then((response) => {
      const {data} =  response;
      const {content} = data
      console.log('content',': ', content);
      this.setState({quote:content});
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  updateQuote = ()=>{
    this.getQuote();
  }

  render() {
    return (
      <React.Fragment>
        <h2> Random Quote </h2>
        <h3> {this.state.quote} </h3>
        <button onClick={this.updateQuote} >New</button>
      </React.Fragment>
    );
  }
}

export default App;
