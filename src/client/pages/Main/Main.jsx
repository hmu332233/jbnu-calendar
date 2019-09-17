import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.Main}>
        메인페이지
      </div>
    );
  }
}

Main.propTypes = {
};
Main.defaultProps = {
};

export default Main;