import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleList.scss';

import { List } from 'antd';

import ScheduleListItem from 'components/ScheduleListItem';

function ScheduleList(props) {
  return (
    <List
      itemLayout="horizontal"
      size="small"
      bordered
      dataSource={props.items}
      renderItem={item => (
        <ScheduleListItem
          key={item._id}
          title={item.title}
          description={item.category === 'time' ? `${item.end}` : `${item.start} - ${item.end}`}
          content={item.body}
          checked={item.show}
          onSwitchChange={() => props.onSwitchChange(item)}
          onEditClick={() => props.onEditClick(item)}
          onDeleteClick={() => props.onDeleteClick(item)}
        />
      )}
    />
  );
}

ScheduleList.propTypes = {
  items: PropTypes.array,
  onSwitchChange: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
ScheduleList.defaultProps = {
  items: [],
  onSwitchChange: v => v,
  onEditClick: v => v,
  onDeleteClick: v => v,
};

export default ScheduleList;
