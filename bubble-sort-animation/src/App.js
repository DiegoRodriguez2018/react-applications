import React, { Component } from 'react';
import './App.css';
import Chartify from 'chartify';

const dataNumber = 10;

let data = []

for (let index = 1; index <= dataNumber; index++) {
  let newEntry = {
    x_value: 'index',
    y_value: index,
    title: 'title'
  }  
  data.push(newEntry);
}

console.log('data',': ', data);

// let data = [{
//   x_value: '20.11.2016',
//   y_value: 5,
//   title: '007 Spectre'
// },
// {
//   x_value: '20.11.2016',
//   y_value: 5,
//   title: '007 Spectre'
// },
// {
//   x_value: '20.11.2016',
//   y_value: 5,
//   title: '007 Spectre'
// }];

let config = {
  theme: 'blue',
  width: 50,			      
  height: 10,		
  box_size: 20,
  box_radius: 8,
  line: false,
  line_only: false,
  bordered: false
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Chartify 
              data={data} 
              container="films-container" 
              config={config} 
          />
        </div>
      </div>
    );
  }
}

export default App;
