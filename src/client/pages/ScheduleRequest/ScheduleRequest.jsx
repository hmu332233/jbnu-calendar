import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleRequest.scss';

import axios from 'axios';

import { Typography, Row, Col } from 'antd';
const { Title, Paragraph, Text } = Typography;

import Layout from 'components/Layout';
import ScheduleForm from 'components/ScheduleForm';

class ScheduleRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendars: [],
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
      alert(`등록 요청 완료되었습니다 - ${title}`);
    });
  };

  render() {
    return (
      <Layout activePage="request">
        <Row className={styles.ScheduleRequest__row} gutter={24} type="flex" justify="center">
          <Col xs={24} md={12} lg={10} xl={8}>
            <Typography>
              <Title level={3}>일정 등록 요청</Title>
              <Paragraph>
                전북대 캘린더는 전북대학교의 모든 일정을 모아보는 캘린더입니다. <br />
              </Paragraph>
              <Paragraph>
                축제 기간, 동아리 모집 기간, 동아리 공연 홍보등 등록되지 않은 학교의 일정이 있다면 <br />
                언제든지 해당 양식을 이용해 등록 요청을 해주세요! <br />
                등록된 일정은 확인 후 등록 승인해드립니다!
              </Paragraph>
              <Title level={3}>주의 사항</Title>
              <Paragraph>
                다음의 사항은 필수입니다.
                <ul>
                  <li>카테고리</li>
                  <li>일정명</li>
                  <li>시작일</li>
                  <li>종료일</li>
                </ul>
              </Paragraph>
            </Typography>
          </Col>
          <Col xs={24} md={12} lg={10} xl={8}>
            <ScheduleForm categories={this.state.calendars} onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Layout>
    );
  }
}

ScheduleRequest.propTypes = {};
ScheduleRequest.defaultProps = {};

export default ScheduleRequest;
