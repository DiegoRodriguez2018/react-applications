import React, { Component } from 'react';
import {View} from 'react-native';

import './App.css';
import Graph from 'react-native-line-plot';



class App extends Component {
  state = {
    info: [],
  }
  // info : [{price: , color: }]


  connect() {
    this.url = 'wss://stream.binance.com:9443/ws/btcusdt@miniTicker'
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log("connected");
    }

    this.ws.onmessage = message => {
      // console.log('message',': ', message);
      const data = JSON.parse(message.data);
      // console.log('data',': ', data);

      const price = data.c;
      let color = "black";

      const currentValue = {}
      currentValue.price = price;
      currentValue.color = color;

      // console.log('price',': ', price);
      // console.log('color',': ', color);
      // console.log('currentValue',': ', currentValue);


      const temp = this.state.info;
      const previousValue = temp[temp.length - 1];




      if (previousValue) {

        // console.log('previousValue.price', ': ', previousValue.price);
        // console.log('currentValue.price',': ', currentValue.price);

        if (currentValue.price > previousValue.price) {
          currentValue.color = "green";
        } else if (currentValue.price < previousValue.price) {
          currentValue.color = "red";
        } else {
          currentValue.color = "black";
        }

      }



      temp.push(currentValue);


      this.setState({ info: temp });

      // console.log('this.state.info',': ', this.state.info);

      //Scrolling to the bottom of the scroll box. 
      const scrollBox = document.querySelector(".scrollBox");
      scrollBox.scrollTop = scrollBox.scrollHeight;

    }

  }


  componentDidMount() {
    this.connect();
  }

  render() {
    const info = this.state.info;

    return (
      <div className="App">
        <h1>Values:</h1>

        <div className="scrollBox">

          {info.map(value => {
            const { color, price } = value;
            return <h3 className={color}> {price}</h3>
          })}

          <View style={styles.container}>
            <Graph
              data={[[0, 0], [33, 30], [66, 25], [99, 50]]}
              graphColorPrimary='#000000'
              graphColorSecondary='#FF0000'
              xUnit='foo'
              yUnit='bar'
            />
          </View>
        </div>

      </div>
    );
  }
}

export default App;
