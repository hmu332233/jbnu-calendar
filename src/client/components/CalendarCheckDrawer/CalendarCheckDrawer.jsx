import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarCheckDrawer.scss';

import { Drawer, Button } from 'antd';

import useToggle from 'hooks/useToggle';

import CalendarCheckList from 'components/CalendarCheckList';

function CalendarCheckDrawer(props) {
  const [isOpen, toggle] = useToggle();
  return (
    <div className={styles.CalendarCheckDrawer}>
      <div className={styles.CalendarCheckDrawer__row}>
        <Button onClick={toggle}>일정 필터</Button>
        <div className={styles.CalendarCheckDrawer__row__text}>{props.text}</div>
      </div>
      <Drawer title="일정 필터" placement="left" visible={isOpen} onClose={toggle}>
        <CalendarCheckList items={props.items} onChange={props.onChange} />
      </Drawer>
    </div>
  );
}

CalendarCheckDrawer.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
};
CalendarCheckDrawer.defaultProps = {
  text: '',
  items: [],
  onChange: v => v,
};

export default CalendarCheckDrawer;
