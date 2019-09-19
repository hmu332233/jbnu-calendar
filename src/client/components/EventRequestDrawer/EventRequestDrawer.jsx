import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventRequestDrawer.scss';

import { Drawer } from 'antd';

function EventRequestDrawer(props) {
  return (
    <Drawer
      title="일정 등록 요청"
      placement="right"
      visible={props.isOpen}
      onClose={props.onClose}
      closable
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

EventRequestDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
EventRequestDrawer.defaultProps = {
  isOpen: false,
};

export default EventRequestDrawer;