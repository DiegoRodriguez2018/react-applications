import React, { Component } from 'react';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});

class New extends Component {
     //this refers to the api path
    modelPath = this.props.modelPath;

    render() {
        return(

            <h1>New {this.modelPath} page</h1>
        )
    }
}

export default New;