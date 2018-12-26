import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});


class List extends Component {
    modelPath = '/items/'
    
    state = {
        item: null,
        input: null
    }

    getItem = () => {
        const { id } = this.props.match.params;
        regularRequest.get(`${this.modelPath}${id}`)
            .then(response => {
                console.log('response.data', ': ', response.data);
                const item = response.data[0]
                return item
            })
            .then(item => {
                console.log('item', ': ', item);
                this.setState({ item })

            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        console.log("Component Did Mount");
        const { id } = this.props.match.params;
        console.log('id', ': ', id);

        this.getItem()

    }

    handleInputUpdate(e) {
        const { value } = e.target;
        this.setState({ input: value })
        console.log('value', ': ', value);

    }

    render() {
        const { item } = this.state
        if (item) {
            return (
                <div>
                    <h1> Item </h1>
                    <p>Current Description: {this.state.item.item}</p>

                    <form className="input-area">
                        <label htmlFor="input-box"> Update Description: </label>
                        <input type="text" id="input-box" onChange={this.handleInputUpdate.bind(this)}></input>
                        {/* <button onClick={this.handleUpdate.bind(this)}> Update </button> */}
                    </form>

                </div>
            );
        } else {
            return (
                <div>
                    <h2>Loading.....</h2>
                </div>
            );
        }
    }
}

export default List;