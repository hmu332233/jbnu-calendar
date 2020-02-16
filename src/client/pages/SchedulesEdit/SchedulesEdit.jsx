import React from 'react';
import PropTypes from 'prop-types';
import styles from './SchedulesEdit.scss';

import axios from 'axios';

import { Row, Col } from 'antd';

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';

class SchedulesEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendars: [],
      schedules: [],
    };
  }

  componentDidMount = () => {
    this.fetchCalendars();
  };

  fetchCalendars = () => {
    axios.get('/api/v1/calendars').then(res => {
      this.setState({ calendars: res.data });
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
        <Row className={styles.ScheduleRegister__row} type="flex" justify="center" gutter={24}>
          <Col span={12}>
            <ScheduleForm categories={this.state.calendars} onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Layout>
    );
  }
}

SchedulesEdit.propTypes = {};
SchedulesEdit.defaultProps = {};

export default SchedulesEdit;
