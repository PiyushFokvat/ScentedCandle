import React from 'react';
import classes from './candleControl.module.css';
import BuildControl from './buildControl/buldControl';

// getting an array of wax as props.type
const waxIng = [
    { label: 'Parafeen Wax  ', type: 'parafeenWax' },
    { label: 'Soy Wax       ', type: 'soyWax' },
    { label: 'Bees Wax      ', type: 'beesWax' },
    { label: 'Granulated Wax', type: 'granulatedWax' },
    { label: 'GelCandle Wax ', type: 'gelCandleWax' },
];

const perfumeIng = [
    { label: 'Fresh ', type: 'fresh' },
    { label: 'Woody ', type: 'woody' },
    { label: 'Floral', type: 'floral' },
    { label: 'Exotic', type: 'exotic' },
];

const threadIng = [
    { label: 'Polyester', type: 'polyester' },
    { label: 'Cotton   ', type: 'cotton' },
];

const flaskIng = [
    { label: 'Glass', type: 'glass' },
    { label: 'Metal', type: 'metal' },
    { label: 'Plastic', type: 'plastic' },
];

const candle = (props) => {
    // const disable = null;
    // for (keys in props.waxState) {

    // }
    return (
        <div className={classes.Candle} >
            <h1>Wax</h1>
            <div className={classes.CandleControl}>
                {waxIng.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.AddWax(ctrl.type)}
                        removed={() => props.RemoveWax(ctrl.type)}
                        disabled={props.disable[ctrl.type]} />
                ))}</div>

            <h1>Perfume</h1>
            <div className={classes.CandleControl}>
                {perfumeIng.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.AddPerfume(ctrl.type)}
                        removed={() => props.RemovePerfume(ctrl.type)}
                        disabled={props.disablePerfume[ctrl.type]} />
                ))}</div>
            <h1>Flask</h1>
            <div className={classes.CandleControl}>
                {flaskIng.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.AddFlask(ctrl.type)}
                        removed={() => props.RemoveFlask(ctrl.type)}
                        disabled={props.disableFlask[ctrl.type]} />
                ))}</div>
            <h1>Thread</h1>
            <div className={classes.CandleControl}>
                {threadIng.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.AddThread(ctrl.type)}
                        removed={() => props.RemoveThread(ctrl.type)}
                        disabled={props.disableThread[ctrl.type]} />
                ))}
            </div>
        </div>
    );
}

export default candle;