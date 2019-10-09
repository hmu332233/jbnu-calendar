import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MobileMain = lazy(() => import('pages/MobileMain'));
const SignIn = lazy(() => import('pages/SignIn'));

function MobileMainApp(props) {
  return (
    <Router>
      <Suspense fallback={''}>
      <Switch>
        <Route path='/' exact component={MobileMain} />
        <Route path='/signin' exact component={SignIn} />
      </Switch>
      </Suspense>
    </Router>
  );
}

MobileMainApp.propTypes = {};
MobileMainApp.defaultProps = {};

export default MobileMainApp;
