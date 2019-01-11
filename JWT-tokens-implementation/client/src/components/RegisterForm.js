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
    const url = 'http://localhost:3500/auth/register';
    const data = {
      username,
      password
    }
    
    axios.post(url, data)
    .then(resp => {
      
      // console.log('resp.data',': ', resp.data);
      
      this.setState({ message: resp.data })
      //TODO: generate a token and redirect to dashboard 
      
      })
      .catch(error => {

        this.setState({ error })

      })
  }

  render() {
    const { error, message } = this.state;
    return (
      <React.Fragment>
        <form>
          <label htmlFor="username"> Username: </label>
          <input type="text" id="username" onChange={this.handleInputChange} />

          <label htmlFor="username"> Password: </label>
          <input type="password" id="password" onChange={this.handleInputChange} />

          <button onClick={this.submitForm}>Send to API</button>
        </form>

        {message && <p> {message} </p>}

        {error && <p> {error} </p>}


      </React.Fragment>
    );
  }
}

export default Form;