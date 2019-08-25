import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'antd';

import covertTimeStampToDateString from '../../utils/covertTsToDateString';

function ForecastItem(props) {
  const {
    data,
  } = props;

  return (
    <Card>
      <div>
        {covertTimeStampToDateString(data.dt)}
      </div>
      <div>
        {data.temp.day} &deg;C
      </div>
    </Card>
  );
}

ForecastItem.propTypes = {
  data: PropTypes.shape({
    dt: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastItem;
