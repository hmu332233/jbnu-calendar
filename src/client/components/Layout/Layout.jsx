import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.scss';

import classnames from 'classnames';

import { Layout as AntdLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntdLayout;

function Layout(props) {
  return (
    <AntdLayout className={styles.Layout}>
      <Header className={styles.Layout__header}>
        <h1 className={styles.Layout__header__title}>전북대 캘린더</h1>
        <Menu className={styles.Layout__header__menu} theme="light" mode="horizontal" defaultSelectedKeys={['calendar']}>
          <Menu.Item key="calendar">캘린더</Menu.Item>
          <Menu.Item key="register">일정 등록</Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.Layout__content}>{props.children}</Content>
      <Footer>© 2019. minung.han</Footer>
    </AntdLayout>
  );
}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
