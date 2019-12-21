import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

function Main(props) {
  return (
    <div className={styles.Main}>
      메인 페이지
    </div>
  );
}

Main.propTypes = {
};
Main.defaultProps = {
};

export default Main;