import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});


class UsersSignUp extends Component {
    modelPath = '/items/'

    state = {
        items: [],
        input: null
    }

    componentDidMount() {
    }

    handleInputUpdate(e) {
        const { value } = e.target;
        this.setState({ input: value })
    }

    handlePost(e) {
        // e.preventDefault();
        console.log('this.state.items', ': ', this.state.items);
        regularRequest.post(`${this.modelPath}`, {
            item: this.state.input
        })
            .then(resp => console.log(resp.data))
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <h1>Welcome </h1>
                //TODO: implement a more general handleInput method.
                <form className="input-area">
                    <label htmlFor="User Name"> User Name: </label>
                    <input type="text" id="user-name" onChange={this.handleInputUpdate.bind(this)}></input>

                    <label htmlFor="Password"> Password: </label>
                    <input type="text" id="password" onChange={this.handleInputUpdate.bind(this)}></input>
                    <button onClick={this.handlePost.bind(this)}> Add Item </button>
                </form>
            </div>
        );
    }
}

export default UsersSignUp;