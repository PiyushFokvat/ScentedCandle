import React, { Component } from 'react';
import Candle from '../../components/candleControl/candleControl';
import { connect } from 'react-redux';
import classes from './candlebuild.module.css';
import { NavLink } from 'react-router-dom';


class CandleBuilder extends Component {
    render() {
        const disabledInfoWax = {
            ...this.props.waxState
        }
        const disabledInfoPerfume = {
            ...this.props.perfumeState
        }
        const disabledInfoThread = {
            ...this.props.threadState
        }
        const disabledInfoFlask = {
            ...this.props.flaskState
        }

        let butOutput = null;

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

        if (waxOutput !== null && flaskOutput !== null &&
            perfumeOutput !== null && threadOutput !== null) {
            butOutput = false;
        }
        else {
            butOutput = true;
        }
        return (
            <div className={classes.Candle} >
                <p className={classes.CandleParagraph}>Total Price : {this.props.totalPriceState}</p>
                <NavLink to="/chart"
                    exact><button className={classes.CandleButton} disabled={butOutput}>Order Now</button></NavLink>
                <Candle
                    disable={disabledInfoWax}
                    disablePerfume={disabledInfoPerfume}
                    disableThread={disabledInfoThread}
                    disableFlask={disabledInfoFlask}
                    AddWax={this.props.onSelectWax}
                    RemoveWax={this.props.onUnSelectWax}
                    AddPerfume={this.props.onSelectPerfume}
                    RemovePerfume={this.props.onUnSelectPerfume}
                    AddThread={this.props.onSelectThread}
                    RemoveThread={this.props.onUnSelectThread}
                    AddFlask={this.props.onSelectFlask}
                    RemoveFlask={this.props.onUnSelectFlask} />
            </div>
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

const mapDispatchToProps = dispatch => {
    return {
        onSelectWax: (wType) => dispatch({ type: 'SELECT_WAX', waxType: wType }),
        onSelectPerfume: (wType) => dispatch({ type: 'SELECT_PERFUME', waxType: wType }),
        onSelectThread: (wType) => dispatch({ type: 'SELECT_THREAD', waxType: wType }),
        onSelectFlask: (wType) => dispatch({ type: 'SELECT_FLASK', waxType: wType }),
        onUnSelectWax: (wType) => dispatch({ type: 'UNSELECT_WAX', waxType: wType }),
        onUnSelectPerfume: (wType) => dispatch({ type: 'UNSELECT_PERFUME', waxType: wType }),
        onUnSelectThread: (wType) => dispatch({ type: 'UNSELECT_THREAD', waxType: wType }),
        onUnSelectFlask: (wType) => dispatch({ type: 'UNSELECT_FLASK', waxType: wType })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandleBuilder);