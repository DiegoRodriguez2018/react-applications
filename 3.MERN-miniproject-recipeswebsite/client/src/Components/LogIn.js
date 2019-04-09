import React, { Component } from 'react';
import Form from './Form'
import HandleProtectedRequest from './HandleProtectedRequest'
import axios from 'axios';
import history from '../history';


class LogIn extends Component {
    
    state = {}
    
    //note we are getting the username and password from this.state coming from the Form, where input is being taken care of. 
    handleLogin = (username, password) => {
        console.log('submitting request');
        const baseURL =  process.env.REACT_APP_URL;
        console.log('baseURL',': ', baseURL)

        const url = `${baseURL}/auth/login`;
        const data = {
            username,
            password
        }
        axios.post(url, data)
            .then(resp => {
                const {user} = resp.data;
                const {token} = user;
                // console.log('resp.data', ': ', resp.data);
                console.log('user',': ', user);
                console.log('token',': ', token);
                
                //To store in local storage
                // this.setState({ message: resp.data })
                // after this step is a good moment to REROUTE to home page.
                history.push('/recipes');
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