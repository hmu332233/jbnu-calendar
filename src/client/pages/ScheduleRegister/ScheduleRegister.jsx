import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleRegister.scss';

import axios from 'axios';

import { Row, Col } from 'antd';

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';
import ScheduleList from 'components/ScheduleList';

class ScheduleRegister extends React.Component {
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
      this.setState({ calendars: res.data });
    });
  };

  fetchSchedules = () => {
    axios.get('/api/v1/schedules/my').then(res => {
      this.setState({ schedules: res.data });
    });
  };

  handleSubmit = ({ calendarId, title, body, location, url, start, end, allDay }) => {
    const data = {
      calendarId,
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
      <Layout activePage="schedules">
        <Row className={styles.ScheduleRegister__row} gutter={24}>
          <Col span={24}>
            <ScheduleForm categories={this.state.calendars} onSubmit={this.handleSubmit} />
          </Col>
          <Col span={24}>
            <ScheduleList items={this.state.schedules} />
          </Col>
        </Row>
      </Layout>
    );
  }
}

ScheduleRegister.propTypes = {};
ScheduleRegister.defaultProps = {};

export default ScheduleRegister;
