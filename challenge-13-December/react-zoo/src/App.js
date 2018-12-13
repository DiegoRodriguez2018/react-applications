import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalsInTheZoo: 0,
      totalMammals: 0,
      totalReptiles: 0,
      totalBirds: 0,
      totalFish: 0
    }

  }
  increaseClick() {
    console.log('updating value')
    const currentTotal = this.state.animalsInTheZoo;
    this.setState({ animalsInTheZoo: currentTotal + 1 });
  }
  decreaseClick() {
    console.log('updating value')
    const currentTotal = this.state.animalsInTheZoo;
    this.setState({ animalsInTheZoo: currentTotal - 1 });
  }
  updateSpecies(specie, value){
    console.log('specie',': ', specie);
    console.log('increment',': ', value);
    
    if (specie=="Mammal"){
      this.state.totalMammals +=value;
      console.log("update")
    }else if (specie=="Reptile"){
      this.state.totalReptiles +=value;
    }else if (specie=="Bird"){
      this.state.totalBirds +=value;
    }else if (specie=="Fish"){
      this.state.totalFish += value;
    }
    
    
  }

  render() {
    return (
      <div className="App">
        <h1>Number of Animals in the Zoo: {this.state.animalsInTheZoo}</h1> 
        <div class="container">
          <Button label="Monkeys" 
          specie="Mammal"
          increaseClick={this.increaseClick.bind(this)}
          decreaseClick={this.decreaseClick.bind(this)} 
          updateSpecies={this.updateSpecies.bind(this)}
          />

          <Button label="Snake" 
          specie="Reptile"
          increaseClick={this.increaseClick.bind(this)}
          decreaseClick={this.decreaseClick.bind(this)} 
          updateSpecies={this.updateSpecies.bind(this)}
          />

          <Button label="Flamenco" 
          specie="Bird"
          increaseClick={this.increaseClick.bind(this)}
          decreaseClick={this.decreaseClick.bind(this)} 
          updateSpecies={this.updateSpecies.bind(this)}
          />

          <Button label="Shark" 
          specie="Fish"
          increaseClick={this.increaseClick.bind(this)}
          decreaseClick={this.decreaseClick.bind(this)} 
          updateSpecies={this.updateSpecies.bind(this)}
          />
        </div>

        <div class="species">
          <h1> Species </h1>
          <h4> Total Mammals: {this.state.totalMammals} </h4>
          <h4> Total Reptiles: {this.state.totalReptiles} </h4>
          <h4> Total totalBirds: {this.state.totalBirds} </h4>
          <h4> Total Fish: {this.state.totalFish} </h4>

        </div>

      </div>
    );
  }
}

export default App;
