import { useState } from 'react';
import Form from './components/Form';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1040123456, id: 1 },
    { name: 'Ada Lovelace', number: 39445323523, id: 2 },
    { name: 'Dan Abramov', number: 1243234345, id: 3 },
    { name: 'Mary Poppendieck', number: 39236423122, id: 4 }
  ]);

  const handleAddPerson = (person) => {
    const isDuplicateName = persons.some((dataPerson) => {
      return dataPerson.name.toLowerCase() === person.name.toLowerCase();
    });

    const isDuplicateNumber = persons.some((dataPerson) => {
      return dataPerson.number === person.number;
    });

    if (isDuplicateName) {
      alert(`${person.name} is already added to phonebook`);
    } else if (isDuplicateNumber) {
      alert(`number ${person.number} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person));
    }
  };

  const [filter, setFilter] = useState('');

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <Form handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
