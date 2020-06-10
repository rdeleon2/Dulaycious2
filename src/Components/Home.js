import React from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
function Home (props){
    return(
        <div className="container">
            <h1>HomePage</h1>
            <Link to="/menu">MENU</Link>
            <Menu />
        </div>
    )
}

export default Home;