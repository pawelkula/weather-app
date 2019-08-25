import PropTypes from 'prop-types';
import React from 'react';
import isEmpty from 'lodash.isempty';
import MESSAGES from '../../constants/messages';

function ForecastResultHeader(props) {
  const { city } = props;

  if (isEmpty(city)) return null;

  return (
    <h3>{MESSAGES.FORECAST_RESULTS} {city.name} ({city.country})</h3>
  );
}

ForecastResultHeader.propsTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
};

export default ForecastResultHeader;
