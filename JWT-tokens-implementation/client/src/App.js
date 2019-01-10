import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LogIn from './LogIn'
import Dashboard from './Dashboard'
import Register from './Register'



class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />

        </React.Fragment>
      </Router>

    );
  }
}

export default App;