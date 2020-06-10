import React from 'react';
import DESSERTS from '../shared/desserts';
import Dessert from './Dessert';
import FOODS from '../shared/food';
import Foods from './Foods';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <React.Fragment>
            <Link to="/home">home</Link>
                <div className="text-center title">
                    <h1>Main Dishes</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {FOODS.map((list) => {
                            return <Foods
                                key={list.id}
                                name={list.name}
                                img={list.img}
                                description={list.description}
                                price={list.price}
                            />
                        })}
                    </div>
                </div>
                <div className="text-center title">
                    <h1>Dessert</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {DESSERTS.map(list => {
                            return (
                                <Dessert
                                    key={list.id}
                                    name={list.name}
                                    img={list.img}
                                    description={list.description}
                                    price={list.price}
                                />
                            )
                        })}
                    </div>
                </div>
        </React.Fragment>
    )


}

export default Menu;