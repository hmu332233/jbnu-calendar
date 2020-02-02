import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Layout.scss';

import classnames from 'classnames';

import { Layout as AntdLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntdLayout;

const HEADER_ITEMS = [
  {
    key: 'calendar',
    path: '/',
    text: '캘린더',
  },
  {
    key: 'request',
    path: '/request',
    text: '일정 등록 요청',
  },
];

function Layout(props) {
  const history = useHistory();
  return (
    <AntdLayout className={styles.Layout}>
      <Header className={styles.Layout__header}>
        <h1 className={styles.Layout__header__title}>전북대 캘린더</h1>
        <Menu className={styles.Layout__header__menu} theme="light" mode="horizontal" defaultSelectedKeys={[props.activePage]}>
          {HEADER_ITEMS.map(item => (
            <Menu.Item key={item.key} onClick={() => history.push(item.path)}>
              {item.text}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className={styles.Layout__content}>{props.children}</Content>
      <Footer>© 2019. minung.han</Footer>
    </AntdLayout>
  );
}

Layout.propTypes = {
  activePage: PropTypes.string,
};
Layout.defaultProps = {
  activePage: 'calendar',
};

export default Layout;
