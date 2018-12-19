### REACT
React deals with the views in the MVC model. React is created and maintained by Facebook.

---


### BABEL and JSX
``` html
<script type="text/babel"></script>
```

Babel is language support, it translates from JSX code javascript, that will later append some html elements. 

JSX is not html and not javascript, although looks a little bit like both. JSX is a different language, thats why we need babel to compile it into html.

Babel is a very important part of the React framework. 



---

```html
    <script type="text/babel">
    ReactDOM.render(
        <h1> My portfolio </h1>,
        document.getElementById("root")
    )
    </script>
```

This will work ok. But the code below would not:


```html
    <script type="text/babel">
    ReactDOM.render(
        <h1> My portfolio </h1>
        <p> hi! </p>,
        document.getElementById("root")
    )
    
    </script>
```

This will produce the following error:
`Adjacent JSX elements must be wrapped in an enclosing tag`

To fix this we need to nested into a div, although later we will find better ways to create our react apps so we dont create unnecesary elements. 

---
### Yarn quick overview.
Yarn is another package manager commonly used. 
https://yarnpkg.com/en/

Yarn was created by facebook. 

npm and yarn are very similar. 

---
### Create React app
Create react app -> is a react boilerplate
https://github.com/facebook/create-react-app

Create react app is an npm package. To install it:

`npm i create-react-app -g`

Note we are passing the -g (global) flag so it doesnt only create it in the project.json file but globaly. 

We need to install the global install as we are going to use it to create a react application in any folder. 

Then just go to the folder where your app is going to be created and type:
`create-react app <your-app-name>`

This will create the following files:
![](2018-12-10-11-54-30.png)

To start the server
`npm start`

---

Note index.html is the entry point and index.js contains:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Also note we are importing App.js which contains the App class:

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
```

---
We can create a custom function in the src folder. In this case we are going to create a Navbaf function:

```javascript   
const Navbar = () => {
    return( 
        <nav> 
            <a href="https://facebook.com">Facebook</a>
            <a href="https://Twitter.com">Twitter</a> 
            <a href="https://instagram.com">Instagram</a> 
        </nav>
    );
}

export default Navbar;
```

Note we need to type `export default <function-name>`
---


### State and lifecycle methods:

A lifecycle method that we have used before is render(). There is many of lifecycle methods but the most useful are:
  
* render(): trigerred when loading to screen.
* componentDidMount(): gets triggered after the constructor. just get triggered once.
* componentDidUpdate(): triggered anytime react detects something has changed and has to keep track of the component. 
* componentWillUnmount(): triggered just before the destruction of the element.

there is more info in the documentation:
https://reactjs.org/docs/state-and-lifecycle.html


---

## React router

We need to install react-router-dom:

https://reacttraining.com/react-router/web/guides/quick-start

There is a package for native and core react as well. (for mobile dev)

To install:

npm install --save react-router-dom

```javascript
import React, { Component } from 'react';
import './App.css';
import Bikes from './Bikes';
import Bike from './Bike';
import About from './About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Bikes}/>
          <Route exact path="/bikes" component={Bikes}/>
          <Route exact path="/bikes/:id" component={Bike}/>
          <Route path="/About" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;

```

Note we need to do `<Route exact path="/" component={Bikes}/>` because if we dont do exact path match it will render both elementes in /about.

---

### Link component

Link allows you to pass states to the component. 




---
### Useful npm  extensions
1. Axios https://www.npmjs.com/package/axios
2. Request https://www.npmjs.com/package/request