import React, { Component } from 'react';

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
               <p>We sell the best bikes.</p>
            </div>
        );
    }
}

export default About;
