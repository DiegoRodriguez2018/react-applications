import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './stylesheets/App.css';


import LogIn from './components/LogIn'
import Register from './components/Register'
import Home from './components/Home'
// import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav>
            <li className="navigation-links"> <Link to="/login">Login</Link> </li>
            <li className="navigation-links"><Link to="/register">Register</Link> </li>
            <li className="navigation-links"><Link to="/dashboard">Dashboard</Link> </li>
          </nav>
          
          {/* //TODO: implement login and register in the api.  */}
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />

        </React.Fragment>
      </Router>

    );
  }
}

export default App;