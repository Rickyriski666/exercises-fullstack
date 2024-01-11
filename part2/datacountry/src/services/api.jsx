import axios from 'axios';

const getAll = () => {
  const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`;
  return axios.get(baseUrl);
};

const getCountryWeather = async (city) => {
  const apiKey = import.meta.env.VITE_API_WEATHER_KEY;
  const baseUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const weatherData = await axios.get(`${baseUrlWeather}`);

  return weatherData;
};

export default { getAll, getCountryWeather };
