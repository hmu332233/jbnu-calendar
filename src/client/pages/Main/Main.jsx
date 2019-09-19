import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import { PageHeader, Calendar, Row, Col } from 'antd';

import BasicLayout from 'components/BasicLayout';
import EventRequestDrawer from 'components/EventRequestDrawer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDrawer: false
    };
  }

  toggleDrawer = () => {
    this.setState(prev => ({ isOpenDrawer: !prev.isOpenDrawer }));
  };

  onDrawerClose = () => {
    this.setState({ isOpenDrawer: false });
  };

  render() {
    return (
      <BasicLayout
        header="헤더 자리"
        sider={<Calendar fullscreen={false} />}
        content={
          <>
            <EventRequestDrawer
              isOpen={this.state.isOpenDrawer}
              onClose={this.onDrawerClose}
            />
            <div style={{ backgroundColor: 'white' }}>
              <Calendar />
            </div>
          </>
        }
      ></BasicLayout>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
