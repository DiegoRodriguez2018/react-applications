import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class About extends Component {
    state = {
        bikes: [{ id: 1, name: "gold bike" },
        { id: 2, name: "red bike " },
        { id: 3, name: "blue bike " },
        ]
    }


    render() {
        return (
            <div className="App">
                <Navbar />
               
               <p>We sell the best bikes.</p>
            </div>
        );
    }
}

export default About;
