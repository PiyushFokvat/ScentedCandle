import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../UI/Toolbar/Toolbar'

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes.Main}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;