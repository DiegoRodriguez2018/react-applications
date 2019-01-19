import React, { Component } from 'react';
import axios from 'axios';

const regularRequest = axios.create({
    baseURL: 'http://localhost:3500/',
});


class Index extends Component {
    //this refers to the api path
    modelPath = this.props.modelPath;

    state = {
        items: [],
        input: null,
        keys: []
    }

    getItems = () => {
        const url = `http://127.0.0.1:3500${this.modelPath}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(items => {
                console.log('items', ': ', items);
                this.setState({ items: items });

                //Only extracting keys if the array is not empty, otherwise there will be an uncaught error.  
                if (items.length > 0) {
                    const keys = Object.keys(items[0]);
                    console.log('keys', ': ', keys);
                    this.setState({ keys: keys });
                }

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
            .then(
                resp => {
                    //api response
                    console.log(resp.data)
                    // updating this.state.items if successful.
                    this.getItems()
                }
            )
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { items } = this.state;
        const { keys } = this.state;

        // Removing undesired attributes from keys array:
        const itemsToIgnore = ['_id', '__v','ingredientsInRecipe'];
        itemsToIgnore.map(item => {
            const index = keys.indexOf(item);
            keys.splice(index, 1);
        })

        return (
            <React.Fragment>
                <div className="content">
                <table>
                    <thead>
                        <tr>
                            {keys.map(key => {
                                return <th>{key}</th>

                            })}
                            <th> Update </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    {items.map((doc, index) => {
                        return (
                            <tbody key={index}>
                                {/* note that key above refers to the html tag, and keys bellow refers to the model fields. */}
                                <tr>
                                    {keys.map(key => {
                                        return <td>{doc[key]}</td>
                                    })}

                                    <td> <a className="update-button" href={this.modelPath + doc.id}>
                                        Update </a></td>

                                    <td><a className="delete-button" href="#" id={doc.id} onClick={this.delete}> Delete </a></td>
                                </tr>
                                <tr> 

                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                </div>
                <a className="new-button" href={this.modelPath.slice(0,-1)+'-new'}>New</a>
                

            </React.Fragment>
        );


    }
}

export default Index;