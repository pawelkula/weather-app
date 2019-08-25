import PropTypes from 'prop-types';
import React from 'react';

import './weather-icon.css';

function WeatherIcon(props) {
  const { icon } = props;

  return (
    <div className={`weather-icon weather-icon-${icon}`} />
  );
}

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default WeatherIcon;
