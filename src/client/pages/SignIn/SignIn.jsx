import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignIn.scss';

import axios from 'axios';

import SignInForm from 'components/SignInForm';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = ({ email, password }) => {
    axios.post('/api/v1/auth/signin', { email, password }).then(res => {
      if (res.data.result) {
        window.location.href = '/schedules';
      }
    });
  };

  render() {
    return (
      <div className={styles.SignIn}>
        <SignInForm className={styles.SignIn__form} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

SignIn.propTypes = {};
SignIn.defaultProps = {};

export default SignIn;
