import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignIn.scss';

import axios from 'axios';

import { Layout, Card } from 'antd';

import SignInForm from 'components/SignInForm';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleButtonClick = ({ email, password }) => {
    axios
      .post('/api/v1/auth/signin', { email, password })
      .then(res => {
        if (res.data.result) {
          window.location.href = '/';
        }
      });
  }

  render() {
    return (
      <Layout className={styles.SignIn}>
        <Card className={styles.SignIn__card}>
          <SignInForm
            onButtonClick={this.handleButtonClick}
          />
        </Card>
      </Layout>
    );
  }
}

SignIn.propTypes = {
};
SignIn.defaultProps = {
};

export default SignIn;