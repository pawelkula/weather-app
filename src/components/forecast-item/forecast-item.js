import PropTypes from 'prop-types';
import React from 'react';
import WeatherIcon from '../weather-icon/weather-icon';
import { covertTimeStampToDateString, formatTemp } from '../../utils/strings';

import './forecast-item.css';

function ForecastItem(props) {
  const {
    data,
  } = props;

  return (
    <div className="forecast-item">
      <div className="forecast-item-day">
        {covertTimeStampToDateString(data.dt)}
      </div>
      <div className="forecast-item-data">
        <WeatherIcon icon={data.weather[0].icon} />
        <div className="forecast-item-temp">
          <div className="forecast-item-temp-day">
            {formatTemp(data.temp.day)}
          </div>
          <div className="forecast-item-temp-extremes">
            <div>{formatTemp(data.temp.max)} max</div>
            <div>{formatTemp(data.temp.min)} min</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ForecastItem.propTypes = {
  data: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    temp: PropTypes.shape({
      day: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default ForecastItem;
