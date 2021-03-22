import React, { Component } from 'react';
import classes from './home.module.css';

import { NavLink } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <NavLink to="/"><div>SELECT CANDLE
                </div></NavLink>
                <NavLink to="/create-candle"
                    activeClassName={classes.active}><div >CUSTOMIZE CANDLE
                </div></NavLink>
            </div >
        );
    }
}
export default Home;