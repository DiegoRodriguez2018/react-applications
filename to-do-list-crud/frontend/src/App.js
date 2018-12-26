import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Items from './Items'
import Item from './Item'

import Users from './Users'



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Items} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:id" component={Item} />


            <Route exact path="/users" component={Users} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
