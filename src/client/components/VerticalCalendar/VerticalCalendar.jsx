import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalCalendar.scss';

import classnames from 'classnames';

const Day = props => (
  <div className={classnames(styles.Day, props.active && styles.active)}>
    <span className={styles.Day__day}>{props.day}</span>
    <span className={styles.Day__week}>{props.week}</span>
  </div>
);

function VerticalCalendar(props) {
  return (
    <div className={styles.VerticalCalendar}>
      <Day week="일" day="8" />
      <Day week="월" day="9" active />
      <Day week="화" day="10" />
      <Day week="수" day="11" />
      <Day week="목" day="12" />
    </div>
  );
}

VerticalCalendar.propTypes = {
};
VerticalCalendar.defaultProps = {
};

export default VerticalCalendar;