import React, { Component } from 'react';


class Form extends Component {
  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value });
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }
  render() {
    return (
      <form>
        <input type="text" id="username" onChange={this.handleInputChange} />
        <input type="password" id="password" onChange={this.handleInputChange} />
        <input type="text" id="role" onChange={this.handleInputChange} />
        <button onClick={this.submitForm}>Send to API</button>
      </form>
    );
  }
}

export default Form;