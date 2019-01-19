import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    // just starting an empty state object
    state = {};

    handleProtectedRequest = (e) => {
        console.log('this.state', ': ', this.state);

        const token = localStorage.getItem('token')
        if (token) {
            console.log("token exists");
            
            const baseURL =  process.env.REACT_APP_URL;
            console.log('baseURL',': ', baseURL)
            const url = `${baseURL}/protected/resources`
            //here we are sending the token to the server.
            const options = {
                headers: { token }
            }
            axios.get(url, options)
                .then(res => {
                    console.log('res', ': ', res);

                    this.setState({ message: res.data })
                    this.setState({ error: undefined })
                })
                .catch(error => {
                    //this error handling code is from the axios docs:
                    if (error.response) {

                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log("data: ", error.response);
                        console.log(error.response.status);
                        console.log(error.response.headers);

                        const { data } = error.response;
                        this.setState({ message: undefined })
                        this.setState({ error: data.errorMessage })
                        //note that errorMessage comes from the api.
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })
        } else {
            this.setState({ error: "token error" })
        }
    }
    render() {
        const { error, message } = this.state;

        return (
            <React.Fragment>

                <button onClick={this.handleProtectedRequest}>Request protected resource.</button>

                {message && <p> {message} </p>}
                {error && <p> {error} </p>}

            </React.Fragment>
        );
    }
}

export default Form;