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
      pagination={{
        onChange: page => {
          console.log(page);
        },
      }}
      bordered
      dataSource={props.items}
      renderItem={item => <ScheduleListItem key={item._id} title={item.title} description={item.category === 'time' ? `${item.end}` : `${item.start} - ${item.end}`} content={item.body} />}
    />
  );
}

ScheduleList.propTypes = {
  items: PropTypes.array,
};
ScheduleList.defaultProps = {
  items: [],
};

export default ScheduleList;
