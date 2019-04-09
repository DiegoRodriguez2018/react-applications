import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

class Form extends Component {
  // just starting an empty state object
  state = {};
  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value });
  }
  submitForm = (e) => {
    const baseURL =  process.env.REACT_APP_URL;
    console.log('baseURL',': ', baseURL)
    e.preventDefault();
    // post request code goes here. 
    console.log('submitting request');
    const { username, password } = this.state;
    const url = `${baseURL}/auth/register`;
    const data = {
      username,
      password
    }
    
    axios.post(url, data)
    .then(resp => {
      
      // console.log('resp.data',': ', resp.data);
      
      // this.setState({ message: resp.data })
      //TODO: generate a token and redirect to dashboard 
      history.push('/recipes');
      
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