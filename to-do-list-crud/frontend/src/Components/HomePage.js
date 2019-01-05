import React, { Component } from 'react';

class HomePage extends Component {

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
                <ul className="pages-links">
                        {pages.map(page => {
                           return( <a href={page.path}> {page.label}</a> );
                        })}
                </ul>
            </div>
        );
    }
}

export default HomePage;