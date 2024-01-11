import CountryWeather from './CountryWaether';

export default function CountryDetail({ countries, weather }) {
  const country = {
    name: countries[0].name.common,
    capital: countries[0].capital[0],
    area: countries[0].area,
    languages: countries[0].languages,
    flag: countries[0].flags.png,
    weathers:
      weather === null
        ? null
        : {
            temp: weather.main.temp,
            wind: weather.wind.speed,
            icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
          }
  };

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" width="100" />

      <CountryWeather
        countryCapital={country.capital}
        weathers={country.weathers}
      />
    </div>
  );
}
