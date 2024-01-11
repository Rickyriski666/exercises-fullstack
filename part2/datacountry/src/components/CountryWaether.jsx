export default function CountryWeather({ weathers, countryCapital }) {
  if (weathers === null) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {countryCapital}</h2>
      <p>
        temperatur <b>{weathers.temp}</b> Celcius
      </p>
      <img src={weathers.icon} alt="" />
      <p>wind {weathers.wind} m/s</p>
    </div>
  );
}
