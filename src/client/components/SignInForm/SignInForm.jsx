import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.scss';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

function SignInForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className={styles.SignInForm}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Email을 입력해주세요!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password를 입력해주세요!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {/*getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)*/}
        <Button type="primary" htmlType="submit" className={styles.SignInForm__button}>
          로그인
        </Button>
        
      </Form.Item>
    </Form>
  );
}

SignInForm.propTypes = {};
SignInForm.defaultProps = {};

export default Form.create({ name: 'normal_login' })(SignInForm);
