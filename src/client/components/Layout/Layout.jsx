import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Layout.scss';

import classnames from 'classnames';
import useToggle from 'hooks/useToggle';
import { Layout as AntdLayout, Menu, Icon, Popover } from 'antd';

const { Header, Content, Footer } = AntdLayout;

const HEADER_ITEMS = [
  {
    key: 'about',
    path: '/about',
    text: '소개',
  },
  {
    key: 'request',
    path: '/request',
    text: '일정 등록',
  },
  {
    key: 'calendar',
    path: '/',
    text: '캘린더',
  },
];

const MenuPopover = props => {
  const [isOpen, toggle, open, close, setIsOpen] = useToggle();

  const menu = (
    <Menu theme="light" defaultSelectedKeys={[props.activePage]}>
      {HEADER_ITEMS.map(item => (
        <Menu.Item key={item.key} onClick={() => props.history.push(item.path)}>
          {item.text}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Popover className={props.className} content={menu} trigger="click" placement="bottomRight" visible={isOpen} onVisibleChange={setIsOpen}>
      <Icon type="menu" onClick={toggle} />
    </Popover>
  );
};

const MenuList = props => (
  <Menu className={props.className} theme="light" mode="horizontal" defaultSelectedKeys={[props.activePage]}>
    {HEADER_ITEMS.map(item => (
      <Menu.Item key={item.key} onClick={() => props.history.push(item.path)}>
        {item.text}
      </Menu.Item>
    ))}
  </Menu>
);

function Layout(props) {
  const history = useHistory();
  return (
    <AntdLayout className={styles.Layout}>
      <Header className={styles.Layout__header}>
        <h1 className={styles.Layout__header__title}>전북대 캘린더</h1>
        <div className={styles.Layout__header__menu}>
          <MenuPopover className={styles.Layout__header__menu__popover} activePage={props.activePage} history={history} />
          <MenuList className={styles.Layout__header__menu__list} activePage={props.activePage} history={history} />
        </div>
      </Header>
      <Content className={styles.Layout__content}>{props.children}</Content>
      <Footer className={styles.Layout__footer}>© 2020. minung.han</Footer>
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
