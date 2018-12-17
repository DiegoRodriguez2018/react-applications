import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bikes from './Bikes'
import About from './About'

class App extends Component {
  
  render() {
    const {pathname}= window.location;
    const params =pathname.substr(1);

    if (params === 'bikes' || params==='') {
      //render bikes component
      return (
      <div>
        <h1>Bikes</h1>
        <Bikes />
      </div>)
    } else if (params === 'about'){
      //render about
      return <About />
    }else{
      return <p>Not found.</p>
    }
  }
}

export default App;
