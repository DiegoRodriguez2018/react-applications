import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});


class Items extends Component {
    modelPath = '/items/'

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
        regularRequest.delete(`${this.modelPath}deleteAll`)
            .then(resp => console.log(resp.data))
            .catch(error => {
                console.log(error);
            });
    }

    delete = (event) => {
        console.log('event.target', ': ', event.target);
        const { id } = event.target;

        regularRequest.delete(`${this.modelPath}delete/${id}`)
            .then(resp => console.log(resp.data))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <form className="input-area">
                    <label htmlFor="input-box"> Enter your item: </label>
                    <input type="text" id="input-box" onChange={this.handleInputUpdate.bind(this)}></input>
                    <button onClick={this.handlePost.bind(this)}> Add Item </button>
                    ||
            <button onClick={this.deleteAll.bind(this)}> Delete All </button>
                </form>

                <form className="to-do-list">
                    <table>
                        <thead>
                            <tr>
                                <th>To Do List</th>
                                <th> </th>
                            </tr>
                        </thead>
                        {this.state.items.map((doc, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>{doc.id}.{doc.item}</td>
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

export default Items;