import React, { Component } from 'react';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});

class NewEntryForm extends Component {
    modelPath = this.props.modelPath;
    // just starting an empty state object
    state = {};
    
    componentDidMount(){
      console.log('this.props',': ', this.props);
    }
    
    handleInputChange = (e) => {
      const { value, id } = e.currentTarget;
      this.setState({ [id]: value });
    }
   
    submitForm = (e) => {
      e.preventDefault();
      // console.log('this.props.handleSubmit',': ', this.props.handleSubmit);
      // console.log('this.state',': ', this.state);
      const { username, password } = this.state;
      this.props.handleSubmit(username, password);
      // note we are calling the function passed in the props, but we are calling it with the data that is in this components state. 
      // also note that we defined handleSubmit so it takes the same arguments.
    }
   
    render() {
      return (
        <React.Fragment>
          <form>
            <label htmlFor="username"> Username: </label>
            <input type="text" id="username" onChange={this.handleInputChange} />
  
            <label htmlFor="username"> Password: </label>
            <input type="password" id="password" onChange={this.handleInputChange} />
  
            <button onClick={this.submitForm}>Send to API</button>
          </form>
  
  
  
        </React.Fragment>
      );
    }
  }
  
  export default NewEntryForm;