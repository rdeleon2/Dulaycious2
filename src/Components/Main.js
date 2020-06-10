import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Components/Home';
import Menu from '../Components/Menu';

import {Switch, Route, Redirect} from 'react-router-dom';

function Main() {

    const HomePage = () => {
        return(
            <Home />
        )
    }
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" render={() => <Menu />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;