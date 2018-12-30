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

//Views: index, show, new, edit

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* 
            <Route exact path="/" component={Items} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:id" component={Item} /> */}

            <Route exact path="/items" component={ItemsIndex} />
            <Route exact path="/items/:id" component={ItemsShow} />
            <Route exact path="/items-new" component={ItemsNew} />
            <Route exact path="/items-edit" component={ItemsEdit} />



            <Route exact path="/users" component={UsersIndex} />
            <Route exact path="/users/:id" component={UsersShow} />
            <Route exact path="/users-sign-up" component={UsersNew} />
            <Route exact path="/users-edit" component={UsersEdit} />


          </div>
        </Router>
      </div>
    );
  }
}

export default App;
