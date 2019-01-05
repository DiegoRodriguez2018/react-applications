import React, { Component } from 'react';
import './Stylesheets/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './Components/HomePage'

//Views: Index, Show, New, Edit
import Index from './Components/Views/Index'
import Show from './Components/Views/Show'
import Edit from './Components/Views/Edit'
import New from './Components/Views/New'


class App extends Component {

  createRoutes(modelName) {
    return (
      <React.Fragment>
        <Route exact path={`/${modelName}`}
          render={(props) => <Index modelPath={`/${modelName}/`} {...props} />} />

        <Route exact path={`/${modelName}/:id`}
          render={(props) => <Show modelPath={`/${modelName}/`} {...props} />} />

        <Route exact path={`/${modelName}-new`}
          render={(props) => <New modelPath={`/${modelName}/`} {...props} />} />

        <Route exact path={`/${modelName}-edit`}
          render={(props) => <Edit modelPath={`/${modelName}/`} {...props} />} />
      </React.Fragment>
    )
  }
  render() {
    if (typeof CommentsEdit !== undefined) {
      return (
        <React.Fragment>
          <nav>
            <ul>
              <a href="/">Home</a>
              <a href="/users-new">Sing Up</a>
            </ul>
          </nav>
          <hr></hr>


          <Router>
            <React.Fragment>
              <Route exact path="/" component={HomePage} />
              {/* Note that we are using spread attributes {...props} to pass not only modelPath but all the other hidden props */}
              {this.createRoutes('items')}
              {this.createRoutes('users')}
              {this.createRoutes('comments')}
            </React.Fragment>
          </Router>

        </React.Fragment>
       
      );
    } else {

      return (<p>Loading...</p>);
    }

  }
}

export default App;
