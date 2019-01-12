import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: [],
    history: [],
    position: 0
  }

  componentDidMount(){
    this.newUser()
  }
  
  previousUser(){
    if (this.state.position==0){
      this.setState({
        position: this.state.history.length-1
      })
    }
    console.log('previousPosition',': ', this.state.position - 1);
    
    this.state.position--;

    this.setState({
      // position: this.state.position - 1,
      user:this.state.history[this.state.position - 1],
      
    })

    console.log('this.state.position PREVIOUS USER',': ', this.state.position);
  }

  nextUser(){
    console.log('this.state.position',': ', this.state.position);
    console.log('this.state.history.length',': ', this.state.history.length);
    
    if(this.state.position < (this.state.history.length-1)){
      const nextUser = this.state.history[this.state.position + 1 ]
      console.log("this is the IF");
      
      this.setState({
        user:nextUser,
        position:this.state.position + 1
      })
    }else{
      this.newUser()
    }
    console.log('this.state.position NEXT USER',': ', this.state.position);
  }

  newUser(){
    console.log("new user generated");
    const url= 'https://randomuser.me/api'
    fetch(url)
    .then(res => res.json())
    .then(json=> {
      this.setState({
        user: json.results[0]
      })
      this.state.history.push(json.results[0])
    })
    this.setState({position: (this.state.history.length + 1 ) })
    console.log('this.state.position NEW USER',': ', this.state.position);
    
  }

  render() {

    const name = this.state.user.name
    if (name){
      
      return (
        <div className="App">
          <h1> Profile Info: </h1>
          <h3> {name.first} {name.last}</h3>        
          <img src={this.state.user.picture.large}/>
          <br></br>
          <button onClick={()=>{this.previousUser()} }>Previous</button>
          <button onClick={()=>{this.nextUser()} }>Next</button>
          {/* <button onClick={()=>{this.newUser()} }>Generate New User</button> */}
        </div>
      );
    }else{
      return <h1>Loading....</h1>
    }
  }
}

export default App;
