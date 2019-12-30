import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleTable.scss';

import { Table } from 'antd';

const columns = [
  {
    title: '일정명',
    dataIndex: 'title',
    sorter: true,
    width: '20%',
  },
  {
    title: '설명',
    dataIndex: 'body',
    width: '20%',
  },
  {
    title: '시작일',
    dataIndex: 'start',
    sorter: true,
  },
  {
    title: '종료일',
    dataIndex: 'end',
    sorter: true,
  },
  {
    title: '위치',
    dataIndex: 'location',
  },
  {
    title: 'url',
    dataIndex: 'url',
    witdh: '5%',
  },
];

function ScheduleTable(props) {
  return <Table columns={columns} rowKey={item => item.id} dataSource={props.items} onChange={console.log} pagination={{}} />;
}

ScheduleTable.propTypes = {
  items: PropTypes.array,
};
ScheduleTable.defaultProps = {
  items: [],
};

export default ScheduleTable;
