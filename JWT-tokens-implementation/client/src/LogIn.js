import React, { Component } from 'react';
import LogInForm from './LogInForm'

class LogIn extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Sign In</h2>

                <LogInForm />
            </React.Fragment>
        );
    }
}
export default LogIn;