import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Display from './Display.js';

const projects = [
  {title: "Ruby Project",
  description: "Build a cool Ruby app that solve some problems."},
  {title: "Javascript project",
  description: "Build a cool Javascript app that solve some problems."},
  ];

const workHistory = [
  {title: "Marketing Consultant",
  description: "Sell stuff"},
  {title: "Senior Construction Executive",
  description: "Manage some construction"}

  ];


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />

        <h1> Projects </h1>
        {
          projects.map(element => {
          return (
            <Display name= {element.title}
            description= {element.description}  />
          );
        })
        }


        <h1> Work history </h1>
        {
          workHistory.map(element => {
          return (
            <Display name= {element.title}
            description= {element.description}  />
          );
        })
        }




      </div>
    );
  }
}

export default App;
