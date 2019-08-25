const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily?';
export const WEATHER_API_DAYS = 5;
const WEATHER_API_UNITS = 'metric';
const WEATHER_API_PARAMETERS = `cnt=${WEATHER_API_DAYS}&units=${WEATHER_API_UNITS}&appid=${process.env.REACT_APP_WEATHER_ID}`;

export default `${WEATHER_API_BASE_URL}${WEATHER_API_PARAMETERS}&q=`;
