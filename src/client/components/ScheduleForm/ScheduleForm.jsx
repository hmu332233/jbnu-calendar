import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleForm.scss';

import { Form, Input, DatePicker, Checkbox, Button, Select } from 'antd';

import useToggle from 'hooks/useToggle';
import useInput from 'hooks/useInput';

const DATE_TYPE = {
  DATE: 'YYYY-MM-DD HH:mm:ss',
  TIME: 'YYYY-MM-DD',
};

function ScheduleForm(props) {
  const { value: title, onChange: onTitleChange } = useInput();
  const { value: body, onChange: onBodyChange } = useInput();
  const { value: url, onChange: onUrlChange } = useInput();
  const { value: location, onChange: onLocationChange } = useInput();
  const [dates, setDates] = useState({ start: '', end: '' });
  const [showTime, toggle] = useToggle(false);
  const [category, setCategory] = useState('');

  const handleCategoryChange = value => {
    setCategory(value);
  };

  const handleDateChange = (dates, dateStrings) => {
    setDates({ start: dateStrings[0], end: dateStrings[1] });
  };

  const handleClick = () => {
    props.onSubmit({
      calendarId: category,
      title,
      body,
      location,
      url,
      start: dates.start,
      end: dates.end,
      allDay: !showTime,
    });
  };

  return (
    <div className={styles.ScheduleForm}>
      <Form>
        <Form.Item required>
          <Select placeholder="카테고리" onChange={handleCategoryChange}>
            {props.categories.map(category => (
              <Select.Option value={category.id}>{category.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Input placeholder="일정명" value={title} onChange={onTitleChange} />
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="설명" value={body} onChange={onBodyChange} />
        </Form.Item>
        <Form.Item>
          <DatePicker.RangePicker style={{ width: '100%' }} showTime={showTime} format={showTime ? DATE_TYPE.DATE : DATE_TYPE.TIME} onChange={handleDateChange} placeholder={['시작일', '종료일']} />
          <Checkbox checked={!showTime} onChange={toggle}>
            종일
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Input placeholder="위치" value={location} onChange={onLocationChange} />
        </Form.Item>
        <Form.Item>
          <Input placeholder="URL" value={url} onChange={onUrlChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block onClick={handleClick}>
            완료
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

ScheduleForm.propTypes = {
  categories: [],
  onSubmit: PropTypes.func,
};
ScheduleForm.defaultProps = {
  onSubmit: v => v,
};

export default ScheduleForm;
