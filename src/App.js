import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';

import Home from './containers/Home/home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CandleBuilder from './containers/CandleBuilder/candlebuild';
import Chart from './containers/Orders/order'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App} >
          <Layout>
            <Switch>
              <Route path="/create-candle" component={CandleBuilder} />
              <Route path="/chart" component={Chart} />
              <Route path="/choose-candle" component={Home} />
              <Route path="/" exact component={Home} />
            </Switch>
            <Redirect to="/" />
          </Layout>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
