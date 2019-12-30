import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleRegister.scss';

import axios from 'axios';

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';
import ScheduleTable from 'components/ScheduleTable';

class ScheduleRegister extends React.Component {
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

  handleSubmit = ({ title, body, location, url, start, end, allDay }) => {
    const data = {
      title,
      body,
      location,
      url,
      start,
      end,
      allDay,
    };
    axios.post('/api/v1/schedules', data).then(res => {
      const newSchedule = res.data;
      this.setState({ schedules: [...this.state.schedules, newSchedule] });
    });
  };

  render() {
    return (
      <Layout>
        <ScheduleForm onSubmit={this.handleSubmit} />
        <ScheduleTable items={this.state.schedules} />
      </Layout>
    );
  }
}

ScheduleRegister.propTypes = {};
ScheduleRegister.defaultProps = {};

export default ScheduleRegister;
