import React from 'react';
import PropTypes from 'prop-types';

import Calendar from './Calendar';
import Location from './Location';
import Time from './Time';

const ICON_COMPONENT = {
  calendar: Calendar,
  location: Location,
  time: Time,
}

function Icon(props) {
  const IconComponent = ICON_COMPONENT[props.iconId];
  return <IconComponent {...props} />
}

Icon.propTypes = {
  iconId: PropTypes.string,
};
Icon.defaultProps = {
};

export default Icon;