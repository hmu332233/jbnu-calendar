import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleList.scss';

import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
      renderItem={item => (
        <List.Item key={item.title} actions={[<IconText type="edit" text="수정" key="list-edit" />, <IconText type="delete" text="삭제" key="list-delete" />]}>
          <List.Item.Meta title={item.title} description={item.category === 'time' ? `${item.end}` : `${item.start} - ${item.end}`} />
          {item.body}
        </List.Item>
      )}
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
