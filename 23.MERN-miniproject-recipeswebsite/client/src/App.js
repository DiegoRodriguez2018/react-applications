import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './stylesheets/App.css';


// import Dashboard from './components/Dashboard'
import LogIn from './Components/LogIn'
import Register from './Components/Register'
import Home from './Components/Home'
import Recipes from './Components/Recipes'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav>
            <li className="navigation-links"> <Link to="/login">Login</Link> </li>
            <li className="navigation-links"><Link to="/register">Register</Link> </li>
            <li className="navigation-links"><Link to="/recipes">Recipes</Link> </li>
          </nav>
          
          {/* //TODO: implement login and register in the api.  */}
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />


        </React.Fragment>
      </Router>

    );
  }
}

export default App;