import React from 'react';
import PropTypes from 'prop-types';
import styles from './MobileMain.scss';

import { NavBar, Icon } from 'antd-mobile';

import EventCard from 'components/EventCard';

class MobileMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.MobileMain}>
        <NavBar
          mode="light"
          rightContent={[
            <Icon key="0" type="search" />,
          ]}
        >
          전북대 캘린더
        </NavBar>
        <div className={styles.MobileMain__eventList}>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        
      </div>
    );
  }
}

MobileMain.propTypes = {
};
MobileMain.defaultProps = {
};

export default MobileMain;