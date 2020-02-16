import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleRegister.scss';

import axios from 'axios';

import { Row, Col, Button } from 'antd';

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';
import ScheduleList from 'components/ScheduleList';

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
    axios.get('/api/v1/schedules/my').then(res => {
      this.setState({ schedules: res.data });
    });
  };

  handleWriteButtonClick = () => {
    this.props.history.push('/schedules/new');
  };

  handleSwitchChange = item => {
    axios.put(`/api/v1/schedules/${item._id}/show`, { show: !item.show }).then(res => {});
  };

  handleEditClick = item => {};

  handleDeleteClick = item => {};

  render() {
    return (
      <Layout activePage="schedules">
        <Row className={styles.ScheduleRegister__row} type="flex" justify="center" gutter={24}>
          <Col span={16}>
            <ScheduleList items={this.state.schedules} onSwitchChange={this.handleSwitchChange} onEditClick={this.handleEditClick} onDeleteClick={this.handleDeleteClick} />
          </Col>
          <Col span={6}>
            <Button type="primary" block onClick={this.handleWriteButtonClick}>
              일정 작성
            </Button>
          </Col>
        </Row>
      </Layout>
    );
  }
}

ScheduleRegister.propTypes = {};
ScheduleRegister.defaultProps = {};

export default ScheduleRegister;
