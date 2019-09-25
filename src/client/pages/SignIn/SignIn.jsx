import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignIn.scss';

import { Layout, Card } from 'antd';

import SignInForm from 'components/SignInForm';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Layout className={styles.SignIn}>
        <Card className={styles.SignIn__card}>
          <SignInForm />
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