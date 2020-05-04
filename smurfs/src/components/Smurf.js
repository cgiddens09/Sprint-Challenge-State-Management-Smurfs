import React from 'react';

export default function Smurf(props) {
    console.log(props);
    return(
        <div>
            <h2>Name: {props.smurf.name} Smurf</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}