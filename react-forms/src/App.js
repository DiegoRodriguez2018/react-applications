import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';


class App extends Component {
  handleRegistration = (user) => {
    axios.post('http://localhost:5000/auth/register', user)
      .then(resp => console.log(resp.data))
  }

  handleUpdate = (user) => {
    axios.put('http://localhost:5000/auth/update', user)
      .then(resp => console.log(resp.data))
  }

  render() {
    return (
      <div className="App">
        <Form submitForm={this.handleRegistration}/>
      
        <Form submitForm={this.handleUpdate}/>
      
      </div>
    );
  }
}

export default App;
