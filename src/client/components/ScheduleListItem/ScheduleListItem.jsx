import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleListItem.scss';

import { List, Switch, Icon } from 'antd';

const IconText = ({ type, text, onClick }) => (
  <span onClick={onClick}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function ScheduleListItem(props) {
  return (
    <List.Item
      actions={[
        <Switch defaultChecked={props.checked} size="small" onChange={props.onSwitchChange} />,
        <IconText type="edit" text="수정" key="list-edit" onClick={props.onEditClick} />,
        <IconText type="delete" text="삭제" key="list-delete" onClick={props.onDeleteClick} />,
      ]}
    >
      <List.Item.Meta title={props.title} description={props.description} />
      {props.content}
    </List.Item>
  );
}

ScheduleListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.any,
  checked: PropTypes.bool,
  onSwitchChange: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
ScheduleListItem.defaultProps = {
  checked: false,
  onSwitchChange: v => v,
  onEditClick: v => v,
  onDeleteClick: v => v,
};

export default ScheduleListItem;
