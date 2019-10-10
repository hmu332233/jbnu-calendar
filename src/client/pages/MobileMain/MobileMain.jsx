import React from 'react';
import PropTypes from 'prop-types';
import styles from './MobileMain.scss';

import classnames from 'classnames';

import { TabBar } from 'antd-mobile';

import Icon from 'components/Icon';

import VerticalCalendar from 'components/VerticalCalendar';
import EventCard from 'components/EventCard';

class MobileMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'month'
    };
  }
  render() {
    return (
      <div className={styles.MobileMain}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Month"
            key="Month"
            icon={<Icon iconId="calendar" width="24px" />}
            selectedIcon={<Icon iconId="calendar" width="24px" color="#33A3F4" />}
            selected={this.state.selectedTab === 'month'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab'
              });
            }}
          >
            전체 캘린더 자리
          </TabBar.Item>
          <TabBar.Item
            title="Day"
            key="Day"
            icon={<Icon iconId="calendar" width="24px" />}
            selectedIcon={
              <Icon iconId="calendar" width="24px" color="#33A3F4" />
            }
            selected={this.state.selectedTab === 'day'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'day'
              });
            }}
          >
            <div style={{ display: 'flex' }}>
              <VerticalCalendar />
              <div className={styles.MobileMain__eventList}>
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

MobileMain.propTypes = {};
MobileMain.defaultProps = {};

export default MobileMain;
