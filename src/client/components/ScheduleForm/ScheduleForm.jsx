import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleForm.scss';

import moment from 'moment';
import { Form, Input, DatePicker, Checkbox, Button, Select } from 'antd';

import useToggle from 'hooks/useToggle';
import useInput from 'hooks/useInput';

const DATE_TYPE = {
  DATE: 'YYYY-MM-DD HH:mm:ss',
  TIME: 'YYYY-MM-DD',
};

function ScheduleForm(props) {
  const { value: title, onChange: onTitleChange, setValue: setTitle } = useInput(props.defaultValue.title);
  const { value: body, onChange: onBodyChange, setValue: setBody } = useInput(props.defaultValue.body);
  const { value: url, onChange: onUrlChange, setValue: setUrl } = useInput(props.defaultValue.url);
  const { value: location, onChange: onLocationChange, setValue: setLocation } = useInput(props.defaultValue.location);
  const [dates, setDates] = useState({ start: props.defaultValue.start, end: props.defaultValue.end });
  const [showTime, toggle] = useToggle(!props.defaultValue.allDay);
  const [category, setCategory] = useState(props.defaultValue.categoryId);

  const reset = () => {
    setTitle('');
    setBody('');
    setLocation('');
    setUrl('');
  };

  const handleCategoryChange = value => {
    setCategory(value);
  };

  const handleDateChange = (dates, dateStrings) => {
    setDates({ start: dateStrings[0], end: dateStrings[1] });
  };

  const handleClick = () => {
    if (!category || !title || !dates.start || !dates.end) {
      alert('(필수)를 모두 채워주세요.');
      return;
    }

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
    reset();
  };

  return (
    <div className={styles.ScheduleForm}>
      <Form>
        <Form.Item required>
          <Select placeholder="카테고리 (필수)" defaultValue={category} onChange={handleCategoryChange}>
            {props.categories.map(category => (
              <Select.Option value={category.id}>{category.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Input placeholder="일정명 (필수)" value={title} onChange={onTitleChange} />
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="설명" value={body} onChange={onBodyChange} />
        </Form.Item>
        <Form.Item>
          <DatePicker.RangePicker
            style={{ width: '100%' }}
            showTime={showTime}
            format={showTime ? DATE_TYPE.DATE : DATE_TYPE.TIME}
            defaultValue={[moment(dates.start), moment(dates.end)]}
            onChange={handleDateChange}
            placeholder={['시작일 (필수)', '종료일 (필수)']}
          />
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
  initValue: PropTypes.shape({
    categoryId: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    location: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    allDay: PropTypes.bool,
  }),
  onSubmit: PropTypes.func,
};
ScheduleForm.defaultProps = {
  defaultValue: {
    allDay: true,
  },
  onSubmit: v => v,
};

export default ScheduleForm;
