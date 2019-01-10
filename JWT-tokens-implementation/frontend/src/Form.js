import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  // just starting an empty state object
  state = {};

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value });
  }
  submitForm = (e) => {
    e.preventDefault();
    // post request code goes here. 
    console.log('submitting request');
    const { username, password } = this.state;
    const url = 'http://localhost:3500/auth/login';
    const data = {
      username,
      password
    }
    axios.post(url, data)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => {
        //err.response will display more information about the error
        // for this to work we need to check if the data entered by the user exists in the database in our api, if not we send back an error. 
        console.log(err.response);

        const {status} = err.response;  

        if (status === 403){
          this.setState({error: 'Incorrect username or password. Please try again.'})
        }
      })
  }
  render() {
    const {error} = this.state;
    return (
      <React.Fragment>
        <form>
          <label htmlFor="username"> Username: </label>
          <input type="text" id="username" onChange={this.handleInputChange} />

          <label htmlFor="username"> Password: </label>
          <input type="password" id="password" onChange={this.handleInputChange} />

          <button onClick={this.submitForm}>Send to API</button>
        </form>

        {error && <p> {error} </p>}
        
      </React.Fragment>

    );
  }
}

export default Form;