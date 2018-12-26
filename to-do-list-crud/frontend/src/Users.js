import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});


class Users extends Component {
    modelPath = '/users/'

    state = {
        items: [],
        input: null
    }

    getItems = () => {
        const url = `http://127.0.0.1:3500${this.modelPath}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(items => {
                console.log('items',': ', items);
                this.setState({ items: items })
            })
    }

    componentDidMount() {
        this.getItems()
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

    deleteAll() {
        regularRequest.delete(`${this.modelPath}`)
            .then(resp => console.log(resp.data))
            .catch(error => {
                console.log(error);
            });
    }

    delete = (event) => {
        console.log('event.target', ': ', event.target);
        const { id } = event.target;

        regularRequest.delete(`${this.modelPath}${id}`)
            .then(resp => console.log(resp.data))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
 
                <form className="to-do-list">
                    <table>
                        <thead>
                            <tr>
                                <th> Users </th> 
                                <th> </th>
                            </tr>
                        </thead>
                        {this.state.items.map((doc, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>{doc.id}.{doc.username}</td>
                                        <td> <a href={this.modelPath+doc.id}> Update </a></td>
                                        <td><button id={doc.id} onClick={this.delete}> Delete </button></td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </form>
            </div>
        );
    }
}

export default Users;