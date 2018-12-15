import React, { Component } from 'react';
import './App.css';
import Histogram from 'react-chart-histogram';

const dataNumber = 20;
let data = [];
const orderedData = [];
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

class App extends Component {
  render() {
    const options = { fillColor: 'lightblue', strokeColor: '#0000FF' };
  return (
    <div>
      <Histogram
                xLabels={labels}
                yValues={data}
                width='1000'
                height='600'
                options={options}
            />
    </div>
  )
  }
}

export default App;
