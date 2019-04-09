import React, { Component } from 'react';
import Form from '../Form'
import axios from 'axios';

class NewEntryForm extends Component {
  modelPath = this.props.modelPath;
  // just starting an empty state object
  state = {};

  handleNewEntry = (e) => {
    const baseURL =  `http://localhost:3500` ;
    console.log('baseURL',': ', baseURL)
    // e.preventDefault();
    // post request code goes here. 
    console.log('submitting request');
    const url = `${baseURL}/users`;
 
    const data = this.state; //this.state refers to the state of the form component as we are going to call this function from there.
    
    axios.post(url, data)
    .then(resp => {
      console.log('resp.data',': ', resp.data);
      this.setState({ message: resp.data })
      //TODO: generate a token and redirect to dashboard 
      })
      .catch(error => {
        this.setState({ error })
      })
  }
  


  render() {
    return (
      <React.Fragment>
        <Form handleSubmit={this.handleNewEntry} />
      </React.Fragment>
    );
  }
}

export default NewEntryForm;