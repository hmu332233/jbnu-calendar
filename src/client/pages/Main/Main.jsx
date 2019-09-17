import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import { Calendar } from 'antd';

import BasicLayout from 'components/BasicLayout';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BasicLayout>
        <Calendar onPanelChange={console.log} />
      </BasicLayout>
    );
  }
}

Main.propTypes = {
};
Main.defaultProps = {
};

export default Main;