import React, { Component } from 'react';
import axios from 'axios';

const authedRequest = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    username: 'admin',
    password: 'password'
  }
});

const regularRequest = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// const pokeRequest = axios.create({
//   baseURL: 'https://pokeapi.co/pokemon',
// });

class App extends Component {
  componentDidMount() {
    // fetch('http://localhost:5000/api')
    //   .then(resp => resp.json())
    //   .then(json => console.log(json));
      // .then(resp => console.log(resp.data))
  }

  handlePost() {
    regularRequest.post()
      .then(resp => console.log(resp.data));
        // fetch(url, {
        //   method: "POST", // *GET, POST, PUT, DELETE, etc.
        //   headers: {
        //       "Content-Type": "application/json; charset=utf-8",
        //       // "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   body: JSON.stringify(data), // body data type must match "Content-Type" header
        // })
        //   .then(resp => resp.json())
        //   .then(json => console.log(json));
  }
  handleAuthedPost() {
    authedRequest.post('/authed', {newName: 'new name'})
      .then(resp => console.log(resp.data));
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePost}>Make POST request</button>
        <button onClick={this.handleAuthedPost}>Make Authed POST request</button>
      </div>
    );
  }
}

export default App;