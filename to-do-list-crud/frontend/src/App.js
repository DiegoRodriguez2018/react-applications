import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Items from './Items'
import Item from './Item'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Items} />
            <Route exact path="/list" component={Items} />
            <Route exact path="/list/:id" component={Item} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
