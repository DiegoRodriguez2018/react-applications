import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './List'
import Item from './Item'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={List} />
            <Route exact path="/list" component={List} />
            <Route exact path="/list/:id" component={Item} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
