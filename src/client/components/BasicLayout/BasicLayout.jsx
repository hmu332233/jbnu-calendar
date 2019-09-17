import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicLayout.scss';

import { PageHeader, Layout, Menu, Icon } from 'antd';

const { Sider, Content } = Layout;

import useToggle from 'hooks/useToggle';

function BasicLayout(props) {
  const [isOpen, toggle] = useToggle(true);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={!isOpen}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="calendar" />
            <span>캘린더</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="upload" />
            <span>일정 등록</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <PageHeader backIcon={<Icon type={isOpen ? 'arrow-left' : 'arrow-right'} />} onBack={toggle} title="전북대 캘린더" subTitle="모두가 함께 만드는 전북대 공용 캘린더" />
        <Content
          className={styles.BasicLayout__content}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

BasicLayout.propTypes = {};
BasicLayout.defaultProps = {};

export default BasicLayout;
