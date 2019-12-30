import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleRegister.scss';

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';

class ScheduleRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <ScheduleForm onSubmit={console.log} />
      </Layout>
    );
  }
}

ScheduleRegister.propTypes = {};
ScheduleRegister.defaultProps = {};

export default ScheduleRegister;
