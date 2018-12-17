import React, { Component } from 'react';
import './App.css';
import Bikes from './Bikes';
import About from './About';
import Bike from './Bike';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Bikes} />
            <Route exact path="/bikes" component={Bikes} />
            <Route exact path="/bikes/:id" component={Bike} />
            <Route path="/About" component={About} />
          </div>
        </Router>

      </div>

    );
  }
}

export default App;
