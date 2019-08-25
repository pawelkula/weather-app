import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import isEmpty from 'lodash.isempty';
import axios from 'axios';

const { Search } = Input;

const WEATHER_API_PARAMETERS = `cnt=5&units=metric&appid=${process.env.REACT_APP_WEATHER_ID}`;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?${WEATHER_API_PARAMETERS}&q=`;

function Forecast() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('Krakow');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${WEATHER_API_URL}${city}`);

      setData(result.data);
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
        placeholder="Type city name..."
        size="large"
        onSearch={onSearch}
      />
      {
        !isEmpty(data) && (
          <div>
            <h3>5-days forecast from {data.city.name}, {data.city.country}</h3>
            {
              data.list.map(item => (
                <div key={item.dt}>
                  {item.dt}
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
