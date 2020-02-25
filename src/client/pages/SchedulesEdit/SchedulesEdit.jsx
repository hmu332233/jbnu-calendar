import React from 'react';
import PropTypes from 'prop-types';
import styles from './SchedulesEdit.scss';

import axios from 'axios';

import { Row, Col, Spin } from 'antd';

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';

class SchedulesEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingCalendars: true,
      isLoadingSchedule: !!this.props.match.params.id,
      calendars: [],
      schedule: {},
    };
  }

  componentDidMount = () => {
    this.fetchCalendars();

    const id = this.props.match.params.id;
    if (id) {
      this.fetchSchedule({ id });
    }
  };

  fetchSchedule = ({ id }) => {
    axios.get(`/api/v1/schedules/${id}`).then(res => {
      this.setState({ schedule: res.data, isLoadingCalendars: false });
    });
  };

  fetchCalendars = () => {
    axios.get('/api/v1/calendars').then(res => {
      this.setState({ calendars: res.data, isLoadingSchedule: false });
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
      this.props.history.push('/schedules');
    });
  };

  render() {
    const isLoading = this.state.isLoadingCalendars || this.state.isLoadingSchedule;
    return (
      <Layout activePage="schedules">
        <Row className={styles.ScheduleRegister__row} type="flex" justify="center" gutter={24}>
          <Col span={12}>{isLoading ? <Spin /> : <ScheduleForm categories={this.state.calendars} defaultValue={this.state.schedule} onSubmit={this.handleSubmit} />}</Col>
        </Row>
      </Layout>
    );
  }
}

SchedulesEdit.propTypes = {};
SchedulesEdit.defaultProps = {};

export default SchedulesEdit;
