import React, { Component } from 'react';

class PagesWelcome extends Component {

    state = {

        pages: [
            { label: "items", path: "items" },
            { label: "users", path: "users" },
            { label: "comments", path: "comments" },
        ]

    }

    render() {
        const { pages } = this.state;
        return (
            <div>
                <h1>Welcome.</h1>
                <ul>
                        {pages.map(page => {
                           return( <li><a href={page.path}> {page.label}</a></li> );
                        })}
                </ul>
            </div>
        );
    }
}

export default PagesWelcome;