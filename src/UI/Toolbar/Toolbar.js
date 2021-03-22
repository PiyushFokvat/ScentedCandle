import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.module.css'

class Toolbar extends Component {
    render() {
        return (
            <div className={classes.Toolbar}>
                <header>
                    <ul>
                        <li><NavLink to="/"
                            exact
                            activeClassName={classes.active}>SCENTED CANDLE</NavLink></li>
                        <li><NavLink to="/choose-candle"
                            activeClassName={classes.active}>CHOOSE CANDLE</NavLink></li>
                        <li><NavLink to="/create-candle"
                            activeClassName={classes.active}>CREATE CANDLE</NavLink></li>
                        <li><NavLink to="/chart"
                            activeClassName={classes.active}>CHART</NavLink></li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Toolbar;