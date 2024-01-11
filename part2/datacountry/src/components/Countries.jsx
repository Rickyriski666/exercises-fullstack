import { useEffect, useState } from 'react';
import api from '../services/api';
import CountryDetail from './CountryDetail';
import CountryList from './CountryList';

export default function Countries({ countries, setSearch }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (countries === null) {
      return;
    }
    if (countries.length === 1) {
      const country = countries[0];
      const city = country.capital[0];

      api.getCountryWeather(city).then((response) => {
        setWeather(response.data);
      });
    }
  }, [countries]);

  if (countries === null) {
    return <p>Search for a country</p>;
  }
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countries.length === 1) {
    return <CountryDetail countries={countries} weather={weather} />;
  }

  return <CountryList countries={countries} setSearch={setSearch} />;
}
