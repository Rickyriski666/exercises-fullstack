export default function CountryList({ countries, setSearch }) {
  return (
    <div>
      {countries.map((country) => (
        <p key={country.name.common}>
          {country.name.common}
          <button onClick={() => setSearch(country.name.common)}>show</button>
        </p>
      ))}
    </div>
  );
}
