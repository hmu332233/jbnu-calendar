import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.scss';

import classnames from 'classnames';

import { Layout as AntdLayout, PageHeader } from 'antd';

const { Header, Content, Footer, Sider } = AntdLayout;

function Layout(props) {
  return (
    <AntdLayout className={styles.Layout}>
      <PageHeader title="일정 관리" />
      <Content className={styles.Layout__content}>{props.children}</Content>
      <Footer>© 2019. minung.han</Footer>
    </AntdLayout>
  );
}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
