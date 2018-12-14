import React, { Component } from 'react';
import './App.css';
import Histogram from 'react-chart-histogram';

const dataNumber = 40;
const data = [];
const labels = [];

for (let index = 0; index <= dataNumber; index++) {
  data.push(index);
  labels.push(`${index}`);
}


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
