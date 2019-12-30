import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleRegister.scss';

import Layout from 'components/Layout';

class ScheduleRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <div className={styles.ScheduleRegister}>스케쥴</div>
      </Layout>
    );
  }
}

ScheduleRegister.propTypes = {};
ScheduleRegister.defaultProps = {};

export default ScheduleRegister;
