import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    info: [],
    currencies : ""
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
      
      this.state.currencies =  data.s;    

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

  toCurrency(num){
    return `$${parseFloat(num).toFixed(2)}`
  }

  render() {
    const info = this.state.info;

    return (
      <div className="App">
        <h1>Values:</h1>
        <h2>{this.state.currencies}</h2>
        <div className="scrollBox">

          {info.map(value => {
            const { color, price } = value;
            return <h3 className={color}> {this.toCurrency(price)}</h3>
          })}
        </div>

      </div>
    );
  }
}

export default App;
