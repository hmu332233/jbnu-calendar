import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = lazy(() => import('pages/Main'));
const SignIn = lazy(() => import('pages/SignIn'));

function MainApp(props) {
  return (
    <Router>
      <Suspense fallback={''}>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/signin' exact component={SignIn} />
      </Switch>
      </Suspense>
    </Router>
  );
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;
