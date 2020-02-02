import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = lazy(() => import('pages/Main'));
const ScheduleRegister = lazy(() => import('pages/ScheduleRegister'));
const ScheduleRequest = lazy(() => import('pages/ScheduleRequest'));
const SignIn = lazy(() => import('pages/SignIn'));

function MainApp(props) {
  return (
    <Router>
      <Suspense fallback={''}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/request" exact component={ScheduleRequest} />
          <Route path="/schedules" exact component={ScheduleRegister} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </Suspense>
    </Router>
  );
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;
