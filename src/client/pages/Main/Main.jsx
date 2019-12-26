import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import MainCalendar from 'components/MainCalendar';

function Main(props) {
  return (
    <div className={styles.Main}>
      <MainCalendar />
    </div>
  );
}

Main.propTypes = {
};
Main.defaultProps = {
};

export default Main;