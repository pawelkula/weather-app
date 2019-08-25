import React, { useState, useEffect } from 'react';
import { Alert, Input } from 'antd';
import isEmpty from 'lodash.isempty';
import axios from 'axios';
import ForecastItem from '../forecast-item/forecast-item';
import ForecastResultHeader from '../forecast-result-header/forecast-result-header';

import MESSAGES from '../../constants/messages';
import WEATHER_API_URL from '../../constants/api';

import './forecast.css';

const { Search } = Input;

function Forecast() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('Las Palmas de Gran Canaria');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      try {
        const result = await axios(`${WEATHER_API_URL}${city}`);

        setError('');
        setData(result.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(MESSAGES.API_NOT_FOUND);
        } else {
          setError(MESSAGES.API_ERROR);
        }

        setData({});
      }
    };

    fetchData();
  }, [city]);

  const onSearch = (value) => setCity(value);

  return (
    <div>
      <Search
        className="search"
        enterButton
        placeholder={MESSAGES.SEARCH_PLACEHOLDER}
        size="large"
        onSearch={onSearch}
      />
      {error && (
        <Alert
          message={error}
          type="error"
        />
      )}
      {
        !isEmpty(data) && (
          <div>
            <ForecastResultHeader city={data.city} />
            {
              data.list.map((item) => (
                <ForecastItem key={item.dt} data={item} />
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default Forecast;
