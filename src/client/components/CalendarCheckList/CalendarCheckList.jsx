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
      <Row>
        {props.items.map(item => (
          <Col key={item.id} span={4}>
            <Checkbox value={item.id}>{item.name}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
}

CalendarCheckList.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
};
CalendarCheckList.defaultProps = {
  onChange: v => v,
};

export default CalendarCheckList;
