import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: null,
    location: null
  }
  updateProfileInformation = () => {
    fetch('https://randomuser.me/api')
    .then(response => {
      return response.json()
    }).then(randomUsers => {
      const user = randomUsers.results[0]
      const name = user.name
      const location = user.location
      this.setState({
        name: name.first,
        location: location.city
      })
    });
  }
  componentDidMount() {
    this.updateProfileInformation()
  }
  render() {
    return (
      <div className="App">
        { this.state.name ? (
            <Profile name={ this.state.name } location={ this.state.location } />
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, { this.props.name }</h1>
        <p>You are located in { this.props.location }</p>
      </div>
    )
  }
}


export default App;