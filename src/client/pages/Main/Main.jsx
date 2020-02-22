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
      calendars: [],
      schedules: [],
    };
  }

  componentDidMount = () => {
    this.fetchCalendars();
    this.fetchSchedules();
  };

  fetchCalendars = () => {
    axios.get('/api/v1/calendars').then(res => {
      this.setState({
        calendars: res.data,
      });
    });
  };

  fetchSchedules = date => {
    axios.get('/api/v1/schedules', { params: { date } }).then(res => {
      this.setState({
        schedules: res.data.map(schedule => ({ ...schedule, start: new Date(schedule.start), end: new Date(schedule.end), raw: schedule })),
      });
    });
  };

  handleDateChange = date => {
    this.fetchSchedules(date);
  };

  render() {
    return (
      <Layout>
        <MainCalendar calendars={this.state.calendars} schedules={this.state.schedules} onChange={this.handleDateChange} />
      </Layout>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
