const WEATHER_API_PARAMETERS = `cnt=5&units=metric&appid=${process.env.REACT_APP_WEATHER_ID}`;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?${WEATHER_API_PARAMETERS}&q=`;

export default WEATHER_API_URL;
