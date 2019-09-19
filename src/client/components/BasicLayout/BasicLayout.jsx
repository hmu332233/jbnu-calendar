import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicLayout.scss';

import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

function BasicLayout(props) {
  return (
    <Layout className={styles.BasicLayout}>
      <Header>{props.header}</Header>
      <Layout className={styles.BasicLayout__body}>
        <Sider className={styles.BasicLayout__body__sider} width="300" theme="light">{props.sider}</Sider>
        <Content className={styles.BasicLayout__body__content}>
          {props.content}
        </Content>
      </Layout>
    </Layout>
  );
}

BasicLayout.propTypes = {};
BasicLayout.defaultProps = {};

export default BasicLayout;
