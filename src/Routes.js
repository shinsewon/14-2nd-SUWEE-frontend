import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import SignUpPhoneCertify from './Pages/SignUp/SignUpPhoneCertify/SignUpPhoneCertify';
import PasswordFind from '../src/Pages/SignUp/PasswordFind/PasswordFind';
import PasswordRegister from '../src/Pages/SignUp/PasswordRegister/PasswordRegister';
import Agreement from '../src/Pages/SignUp/Agreement/Agreement';
import Payment from '../src/Pages/Payment/Payment';

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signupphone" component={SignUpPhoneCertify} />
            <Route exact path="/password-find" component={PasswordFind} />
            <Route exact path="/password-register" component={PasswordRegister} />
            <Route exact path="/agreement" component={Agreement} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
