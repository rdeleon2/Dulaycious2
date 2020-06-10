import React from 'react';

function Dessert(props) {
    return (
        <div className="col-md-4 col-sm-6 text-center foodBorder">
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.name} />
            <p>{props.description}</p>
            <p>Price {props.price}</p>
        </div>
    )
}

export default Dessert;