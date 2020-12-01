import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;