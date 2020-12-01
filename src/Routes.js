import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={Login} />
=======
            <Route exact path="/" component={Login} />
>>>>>>> 37e8c02... [로그인]
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
