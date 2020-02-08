import React from 'react';
import { withRouter } from 'react-router-dom';

class GA extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.history.action === 'PUSH' && typeof gtag === 'function') {
      gtag('config', 'UA-99767689-2', {
        page_path: this.props.location.pathname,
      });
    }
  }

  render() {
    return null;
  }
}

export default withRouter(GA);
