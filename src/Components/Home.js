import React from 'react';
import {Link} from 'react-router-dom';

function Home (props){
    return(
        <div className="container">
            <h1>HomePage</h1>
            <Link to="/menu">MENU</Link>
        </div>
    )
}

export default Home;