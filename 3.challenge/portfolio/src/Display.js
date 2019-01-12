import React from 'react';

const Display = (props) => {
    return (
        <div>
            <a href="#"> {props.name} </a>
            <p> {props.description} </p>
        </div>
    );
}

export default Display;