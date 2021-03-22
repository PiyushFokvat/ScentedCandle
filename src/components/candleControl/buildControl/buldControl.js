import React from 'react';
import classes from './buildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.Build}>
            <div>{props.label}</div>
            <button onClick={props.removed} disabled={!props.disabled}>UnSelect</button>
            <button onClick={props.added} disabled={props.disabled}>Select</button>
        </div>
    );
}

export default buildControl;