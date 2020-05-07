import { Home, ProductDetail, Product, Error } from './pages/index';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/items" component={ Product } />
              <Route exact path="/items/:id" component={ ProductDetail } />
              <Route path="*" component={ Error } />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}
