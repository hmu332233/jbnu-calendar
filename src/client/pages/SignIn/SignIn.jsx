import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.SignIn}>
        로그인 페이지입니다.
      </div>
    );
  }
}

SignIn.propTypes = {
};
SignIn.defaultProps = {
};

export default SignIn;