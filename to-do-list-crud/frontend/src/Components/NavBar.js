import React, { Component } from 'react';
class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                    <ul>
                        <a href="/">Home</a>
                        <a href="/users-new">Sing Up</a>
                    </ul>
                </nav>
                <hr></hr>
            </React.Fragment>
        );
    }
}
export default NavBar;