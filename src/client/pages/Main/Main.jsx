import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import axios from 'axios';

import Layout from 'components/Layout';
import MainCalendar from 'components/MainCalendar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
    };
  }

  componentDidMount = () => {
    this.fetchSchedules();
  };

  fetchSchedules = () => {
    axios.get('/api/v1/schedules').then(res => {
      this.setState({ schedules: res.data });
    });
  };

  render() {
    return (
      <Layout>
        <MainCalendar schedules={this.state.schedules} />
      </Layout>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
