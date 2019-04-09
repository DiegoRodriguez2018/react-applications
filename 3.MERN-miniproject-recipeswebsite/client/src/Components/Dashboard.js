import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = {};

    handleProtectedRequest = (e) => {
        console.log('this.state', ': ', this.state);
        const token = localStorage.getItem('token')

        if (token) {
            console.log("token exists");
            const baseURL =  process.env.REACT_APP_URL;
            console.log('baseURL',': ', baseURL);
    
            const url = `${baseURL}/protected/dashboard`
            //here we are sending the token to the server.
            const options = {
                headers: { token }
            }
        // const token = localStorage.getItem('token')
            axios.get(url, options)
                .then(res => {
                    console.log('res', ': ', res);
                    const {message} = res.data
                    this.setState({ message })
                })
                .catch(error => {
                    //this error handling code is from the axios docs:
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log("error.response: ", error.response);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);

                        const { message } = error.response.data;
                        this.setState({ message })
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

    componentDidMount(){
        this.handleProtectedRequest();
    }
    render() {
        const {message} = this.state;
        return (
            <React.Fragment>
                {message && <h1> {message} </h1>}
            </React.Fragment>
        );
    }
}
export default Dashboard;