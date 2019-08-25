import React, { useState, useEffect } from 'react';
import { Alert, Input } from 'antd';
import isEmpty from 'lodash.isempty';
import axios from 'axios';
import covertTimeStampToDateString from '../../utils/covertTsToDateString';
import MESSAGES from '../../constants/messages';

import './forecast.css';

const { Search } = Input;

const WEATHER_API_PARAMETERS = `cnt=5&units=metric&appid=${process.env.REACT_APP_WEATHER_ID}`;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?${WEATHER_API_PARAMETERS}&q=`;

function Forecast() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('Krakow');
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

  const onSearch = (value) => {
    console.log('forecast ', value);
    setCity(value);
  };

  return (
    <div>
      <Search
        className="search"
        enterButton
        placeholder={MESSAGES.SEARCH_PLACEHOLDER}
        size="large"
        onSearch={onSearch}
      />
      {
        error && (
          <Alert
            message={error}
            type="error"
          />
        )
      }
      {
        !isEmpty(data) && (
          <div>
            <h3>{MESSAGES.FORECAST_RESULTS} {data.city.name}, {data.city.country}</h3>
            {
              data.list.map(item => (
                <div key={item.dt}>
                  {covertTimeStampToDateString(item.dt)}
                  <div>
                    {item.temp.day} &deg;C
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default Forecast;
