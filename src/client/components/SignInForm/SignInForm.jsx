import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.scss';

import { Form, Icon, Input, Button } from 'antd';

function SignInForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedNormalSignInForm = Form.create({ name: 'signin' })(SignInForm);

WrappedNormalSignInForm.propTypes = {
  onSubmit: PropTypes.func,
};
WrappedNormalSignInForm.defaultProps = {
  onSubmit: v => v,
};

export default WrappedNormalSignInForm;
