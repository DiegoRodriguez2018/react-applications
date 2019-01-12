import React, { Component } from 'react';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});

class New extends Component {
    //this refers to the api path
    modelPath = this.props.modelPath;

    state = {
        value: '',
        items: [],
        keys: []
    }

    // getItem = () => {
    //     // const { id } = this.props.match.params;
    //     const id = 1;
    //     regularRequest.get(`${this.modelPath}${id}`)
    //         .then(response => {
    //             console.log('response.data', ': ', response.data);
    //             const item = response.data[0]
    //             return item
    //         })
    //         .then(item => {
    //             console.log('item', ': ', item);
    //             this.setState({ item })

    //         })
    //         .catch(error => console.log(error));
    // }


    // componentDidMount() {
    //     this.getItem()
    // }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <h1>New {this.modelPath} page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Name: </label>
                  <input type="text" value={this.state.value} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>

            </React.Fragment>


        )
    }
}

export default New;