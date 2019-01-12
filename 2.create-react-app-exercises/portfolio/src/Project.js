import React from 'react';

const Project = (props) => {
    return (
        <div>
            <h1> {props.name} </h1>
            <p> Build a cool app {props.description} that solve some problems. </p>
        </div>
    );
}

export default Project;