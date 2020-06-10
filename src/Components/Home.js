import React from 'react';
import {Link} from 'react-router-dom';

function Home (){
    return(
        <div className="container">
            <h1>HomePage</h1>
            <Link to="/menu">MENU</Link>
            <p>This is where i would put the about you guys stuff then you can click on the menu then contact when reaady to order</p>
            <img src="./images/Kids.JPG" alt="kids" />
        </div>
    )
}

export default Home;