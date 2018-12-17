import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {


    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

            </nav>
        );
    }
}

export default Navbar;
