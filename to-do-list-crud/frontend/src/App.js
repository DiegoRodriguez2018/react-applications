import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ItemsIndex from './Views/Item/Index'
import ItemsShow from './Views/Item/Show'
import ItemsNew from './Views/Item/New'
import ItemsEdit from './Views/Item/Edit'

import UsersIndex from './Views/User/Index'
import UsersShow from './Views/User/Show'
import UsersNew from './Views/User/New'
import UsersEdit from './Views/User/Edit'

import CommentsIndex from './Views/Comments/Index'
import CommentsShow from './Views/Comments/Show'
import CommentsNew from './Views/Comments/New'
import CommentsEdit from './Views/Comments/Edit'

import PagesWelcome from './Views/Pages/Welcome'


//Views: index, show, new, edit

class App extends Component {
  render() {
    if (typeof CommentsEdit !== undefined) {
      console.log("yep");
      return (
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/users-sign-up">SingUp</a>
              </li>
            </ul>

          </nav>


          <hr></hr>
          <Router>
            <div>
              <Route exact path="/" component={PagesWelcome} />

              <Route exact path="/items" component={ItemsIndex} />
              <Route exact path="/items/:id" component={ItemsShow} />
              <Route exact path="/items-new" component={ItemsNew} />
              <Route exact path="/items-edit" component={ItemsEdit} />

              <Route exact path="/users" component={UsersIndex} />
              <Route exact path="/users/:id" component={UsersShow} />
              <Route exact path="/users-sign-up" component={UsersNew} />
              <Route exact path="/users-edit" component={UsersEdit} />

              <Route exact path="/comments" component={CommentsIndex} />
              <Route exact path="/comments/:id" component={CommentsShow} />
              <Route exact path="/comments-sign-up" component={CommentsNew} />
              <Route exact path="/comments-edit" component={CommentsEdit} />

            </div>
          </Router>
        </div>
      );
    } else {

      return (<p>Loading...</p>);
    }

  }
}

export default App;
