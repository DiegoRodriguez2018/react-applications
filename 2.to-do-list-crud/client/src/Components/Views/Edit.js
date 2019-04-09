import React, { Component } from 'react';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});

class Edit extends Component {
     //this refers to the api path
    modelPath = this.props.modelPath;

    render() {
        return(

            <h1>Edit {this.modelPath} page</h1>
        )
    }
}

export default Edit;