import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import api from './services/api';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    api.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const contriesToShow = search
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div>
      <Filter contries={countries} setSearch={setSearch} />
      <Countries countries={contriesToShow} setSearch={setSearch} />
    </div>
  );
}

export default App;
