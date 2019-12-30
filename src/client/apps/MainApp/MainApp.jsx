import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

const Main = lazy(() => import('pages/Main'));
const ScheduleRegister = lazy(() => import('pages/ScheduleRegister'));

function MainApp(props) {
  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={''}>
          <Switch>
            {/* <Route path="/" exact component={Main} /> */}
            <Route path={['/', '/schedules/new', '/schedules/edit']} exact component={ScheduleRegister} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;
