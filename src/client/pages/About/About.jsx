import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.scss';

import Layout from 'components/Layout';

import { Typography, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

function About(props) {
  return (
    <Layout activePage="about">
      <Row gutter={24} type="flex" justify="center">
        <Col xs={22} md={20} lg={16} xl={12}>
          <Typography>
            <Title level={2}>모두가 함께 만드는 전북대 캘린더</Title>
            <Paragraph>
              전북대 캘린더란 <Text strong>누구나 일정을 등록할 수 있는 전북대의 일정 모음</Text>입니다. <br />
              공식 홈페이지에서 볼 수 없는 동아리 천막 기간, 간식 사업, 축제 등 학교생활에서 필요한 일정들을 모으는 것을 목표로 하고 있습니다.
            </Paragraph>
            <Paragraph>
              전북대 캘린더는 모두와 함께 만들어갑니다! <br />
              전북대 캘린더의 로고를 제작해주실 분도 언제든지 환영합니다.
            </Paragraph>
            <Title level={3}>계정 발급</Title>
            <Paragraph>
              총학생회, 총동아리등 공식 기관에 대해서는 일정 등록 승인 없이 바로 일정을 등록할 수 있는 계정을 발급해드립니다. <br />
              필요시 연락주세요.
            </Paragraph>
            <Title level={3}>문의 및 버그 제보</Title>
            <Paragraph>
              문의사항 및 이슈에 대해서는 아래 이메일로 연락주세요. <br />
              <Text strong>contact@minung.dev</Text>
            </Paragraph>
            <Title level={3}>오픈소스</Title>
            <Paragraph>
              이 프로젝트는 오픈소스 프로젝트입니다. <br />
              이슈 및 PR은 언제든지 환영합니다.
              <ul>
                <li>
                  <a href="https://github.com/hmu332233/jbnu-calendar/issues" target="_blank">
                    github: jbnu-calendar
                  </a>
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Layout>
  );
}

About.propTypes = {};
About.defaultProps = {};

export default About;
