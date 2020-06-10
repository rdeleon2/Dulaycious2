import React from 'react';

function Foods(props) {
    return (
        <div className="col-md-4 col-sm-6 text-center foodBorder">
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Foods;