import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Bikes extends Component {
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
         
                {this.state.bikes.map(bike => {
                    const path = `/bikes/${bike.id}`
                    return (
                        
                        <a href={path}>
                            <p key={bike.id}> {bike.name} </p>
                        </a>
                    )
                })}
            </div>
        );
    }
}

export default Bikes;
