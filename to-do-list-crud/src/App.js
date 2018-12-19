import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const regularRequest = axios.create({
  baseURL: 'http://localhost:3500/',
});


class App extends Component {
  state = {
    list: [],
    input: null
  }

  getList = () => {
    const url = 'http://127.0.0.1:3500/list'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(list => {
        console.log('list', ': ', list);
        this.setState({ list: list })

      })
  }

  componentDidMount() {
    this.getList()
  }

  handleInputUpdate(e){
    const {value} = e.target;
    this.setState({input:value})
  }

  handlePost(e) {
    // e.preventDefault();
    console.log('this.state.list', ': ', this.state.list);
    regularRequest.post('/list', {
      item: this.state.input
    })
    .then(resp => console.log(resp.data))
    .catch(error => {
      console.log(error);
    });
  }

  deleteAll(){
    regularRequest.delete('/list', {
      deleteAll: true
    })
    .then(resp => console.log(resp.data))
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <ol>
          {this.state.list.map(doc => {
            return <li> {doc.item} </li>
          })}
        </ol>

        <form>
          <label for="input-box"> Enter your item: </label>
          <input type="text" id="input-box" onChange={this.handleInputUpdate.bind(this)}></input>
          <button onClick={this.handlePost.bind(this)}> Add Item </button>
          <br></br>
          <button onClick={this.deleteAll.bind(this)}> Delete All </button>
        </form>



      </div>
    );
  }
}

export default App;