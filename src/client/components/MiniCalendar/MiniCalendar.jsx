import React from 'react';
import PropTypes from 'prop-types';
import styles from './MiniCalendar.scss';

import { Button, Calendar, Row, Col } from 'antd';

const MiniCalendarHeader = ({ value, type, onChange, onTypeChange }) => {
  const handlePrevButtonClick = () => {
    value.add(-1, 'months');
    onChange(value);
  };
  const handleNextButtonClick = () => {
    value.add(1, 'months');
    onChange(value);
  };
  return (
    <div className={styles.MiniCalendarHeader}>
      <Button
        type="default"
        icon="left"
        size="small"
        onClick={handlePrevButtonClick}
      />
      <h2 className={styles.MiniCalendarHeader__date}>
        {value.format('YYYY.MM')}
      </h2>
      <Button
        type="default"
        icon="right"
        size="small"
        onClick={handleNextButtonClick}
      />
    </div>
  );
};

function MiniCalendar(props) {
  return (
    <Calendar
      className={styles.MiniCalendar}
      fullscreen={false}
      headerRender={MiniCalendarHeader}
      onChange={props.onChange}
      onSelect={props.onSelect}
    />
  );
}

MiniCalendar.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
};
MiniCalendar.defaultProps = {};

export default MiniCalendar;
