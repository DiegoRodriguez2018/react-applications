import React, { Component } from 'react';
import './App.css';
import PokeInfo from './PokeInfo'

class App extends Component {
  state = {
    pokemon : []
  }

  componentDidMount(){
    const url= "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
    .then(res => res.json())
    .then(json=> {
      console.log('json',': ', json);
      const pokemon = json.results.slice(0,151);
      // whe can do this because pokemon: pokemon is the same key. 
      this.setState({pokemon})
    })
  }
  
  componentDidUpdate(){
    console.log("component updated");
  }

  // if you use an arrow function automatically binds it for us.
  handleInfoUpdate(poke){
    console.log('poke',': ', poke);
    this.setState({ selected: poke.url})
  }

  // note that we have to give each element a unique key, in this case we know that the name is unique. We can also use an index to add the key. 
  render() {
    const pokemon = this.state.pokemon
    console.log("App component rendered");
    return (
      <div className="container" >
          <PokeInfo selected={this.state.selected}/>

          {pokemon.map((poke,i) => <h1 className="poke" key={i} onClick={
            () => this.handleInfoUpdate(poke) 
          }> {poke.name} </h1>)
          }
      </div>
    );
  }
}

export default App;
