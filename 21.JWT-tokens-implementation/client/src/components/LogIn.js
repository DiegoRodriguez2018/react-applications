import React, { Component } from 'react';
import Form from './Form'
import HandleProtectedRequest from './HandleProtectedRequest'
import axios from 'axios';


class LogIn extends Component {
    
    state = {}
    
    //note we are getting the username and password from this.state coming from the Form, where input is being taken care of. 
    handleLogin = (username, password) => {
        console.log('submitting request');

        const url = 'http://localhost:3500/auth/login';
        const data = {
            username,
            password
        }
        axios.post(url, data)
            .then(resp => {
                const { token } = resp.data;
                console.log('token', ': ', token);
                //To store in local storage
                localStorage.setItem('token', token);
                this.setState({ message: 'Successful login.' })
                // after this step is a good moment to REROUTE to home page.

            })
            .catch(err => {
                //err.response will display more information about the error
                // for this to work we need to check if the data entered by the user exists in the database in our api, if not we send back an error. 
                console.log(err.response);
                const { status } = err.response;
                if (status === 403) {
                    this.setState({ error: 'Incorrect username or password. Please try again.' })
                }
            })
    }

    render() {
        const {message,error} = this.state;
        
        return (
            <React.Fragment>
                <h2>Login</h2>

                <Form handleSubmit={this.handleLogin} />

                {message && <p> {message} </p>}
                {error && <p> {error} </p>}

                <HandleProtectedRequest />

            </React.Fragment>
        );
    }
}
export default LogIn;