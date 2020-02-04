import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarNavagation.scss';

import classnames from 'classnames';

import { Button, Icon } from 'antd';

function CalendarNavagation(props) {
  return (
    <div className={classnames(styles.CalendarNavagation, props.className)}>
      <Button className={styles.CalendarNavagation__today} onClick={props.onTodayClick}>
        Today
      </Button>
      <Button.Group className={styles.CalendarNavagation__indicator}>
        <Button className={styles.CalendarNavagation__indicator__prev} onClick={props.onPrevClick}>
          <Icon type="left" />
        </Button>
        <Button className={styles.CalendarNavagation__indicator__next} onClick={props.onNextClick}>
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
  );
}

CalendarNavagation.propTypes = {
  className: PropTypes.string,
  onTodayClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
};
CalendarNavagation.defaultProps = {
  onTodayClick: v => v,
  onPrevClick: v => v,
  onNextClick: v => v,
};

export default CalendarNavagation;
