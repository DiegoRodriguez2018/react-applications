import React, { Component } from 'react';
import RegisterForm from './RegisterForm'
class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Register Form</h2>
                <RegisterForm />
            </React.Fragment>
        );
    }
}
export default Register;