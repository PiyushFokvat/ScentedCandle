import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './order.module.css';

class Order extends Component {

    render() {
        let waxOutput = null;
        let perfumeOutput = null;
        let threadOutput = null;
        let flaskOutput = null;
        for (let keys in this.props.waxState) {
            if (this.props.waxState[keys]) {
                waxOutput = keys;
            }
        }
        for (let keys in this.props.perfumeState) {
            if (this.props.perfumeState[keys]) {
                perfumeOutput = keys;
            }
        }
        for (let keys in this.props.threadState) {
            if (this.props.threadState[keys]) {
                threadOutput = keys;
            }
        }
        for (let keys in this.props.flaskState) {
            if (this.props.flaskState[keys]) {
                flaskOutput = keys;
            }
        }


        return (
            waxOutput !== null && flaskOutput !== null &&
                perfumeOutput !== null && threadOutput !== null ?
                <div className={classes.Order}>
                    < h1 > You Create a Nice Candle</h1 >
                    <h />
                    <p>Wax : {waxOutput}</p>
                    <p>Perfume : {perfumeOutput}</p>
                    <p>Thread : {threadOutput}</p>
                    <p>Flask : {flaskOutput}</p>
                    <h1>Total Price : {this.props.totalPriceState}</h1>
                </div > : <div className={classes.Order} >Your Cart is Empty Please Select The Type </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        waxState: state.wax,
        perfumeState: state.perfume,
        threadState: state.thread,
        flaskState: state.flask,
        totalPriceState: state.totalPrice
    }
}

export default connect(mapStateToProps)(Order);