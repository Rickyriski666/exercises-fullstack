import { useEffect, useState } from 'react';
import Form from './components/Form';
import Filter from './components/Filter';
import Persons from './components/Persons';
import api from './services/api';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    api.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} setPersons={setPersons} />
    </div>
  );
};

export default App;
