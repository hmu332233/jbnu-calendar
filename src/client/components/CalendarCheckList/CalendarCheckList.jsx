import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarCheckList.scss';

import { Checkbox, Row, Col } from 'antd';

function CalendarCheckList(props) {
  const defaultValue = props.items
    .filter(item => item.defaultChecked)
    .reduce((arr, item) => {
      arr.push(item.id);
      return arr;
    }, []);
  return (
    <Checkbox.Group className={styles.CalendarCheckList} defaultValue={defaultValue} onChange={props.onChange}>
      {props.items.map(item => (
        <Checkbox className={styles.CalendarCheckList__checkbox} key={item.id} value={item.id}>
          {item.name}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}

CalendarCheckList.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
};
CalendarCheckList.defaultProps = {
  items: [],
  onChange: v => v,
};

export default CalendarCheckList;
