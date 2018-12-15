import React, { Component } from 'react';
import './App.css';
import Histogram from 'react-chart-histogram';

const dataNumber = 10;
let data = [];
let dataSet = []; //array of arrays
const labels = [];

for (let index = 0; index <= dataNumber; index++) {
  data.push(index);
  labels.push(`${index}`);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

data = shuffle(data);
console.log('data',': ', data);

dataSet.push(data.slice()); //Note we use slice(); to create a new independent array.

var length = data.length;
//Number of passes
for (var i = 0; i < length; i++) { 
    //Notice that j < (length - i)
    for (var j = 0; j < (length - i - 1); j++) { 
        //Compare the adjacent positions
        if(data[j] > data[j+1]) {
            //Swap the numbers
            var tmp = data[j];  //Temporary variable to hold the current number
            data[j] = data[j+1]; //Replace current number with adjacent number
            data[j+1] = tmp; //Replace adjacent number with current number
            // console.log('data',': ', data);
            dataSet.push(data.slice());
          }
    }        
}

console.log('dataSet',': ', dataSet);

class App extends Component {
  state = { 
    data: dataSet[0],
    index: 0,
    sorted: false,
  }

  nextData(){
    this.setState({
      data: dataSet[this.state.index +1],
      index: this.state.index +1
    });
  }

  componentDidMount() {
    const iFrequency = 1000;
    const intervalId = setInterval(this.nextData.bind(this), iFrequency);
  }

  render() {
    const options = { fillColor: 'lightblue', strokeColor: '#0000FF' };
    return (
      <div>
        <Histogram
          xLabels={labels}
          yValues={this.state.data}
          width='1000'
          height='600'
          options={options}
        />
      </div>
    )
  }
}

export default App;
