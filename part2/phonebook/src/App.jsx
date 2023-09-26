import { useState } from 'react';
import Form from './components/form/Form';
import ListPerson from './components/ListPerson/ListPerson';
import Filter from './components/filter/Filter';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const formCallback = formData => {
    const { name, number } = formData;
    const trimName = name.trim('');
    const trimNumber = number.trim('');

    if (!trimNumber || !trimName) {
      alert('Field must be filled');
    } else {
      const personExist = persons.find(
        value =>
          value.name.toLowerCase() === formData.name.toLowerCase() ||
          value.number.toLowerCase() === formData.number.toLowerCase()
      );

      if (personExist) {
        alert(`${name} or ${number} already exist`);
      } else {
        setPersons([...persons, { ...formData, id: persons.length + 1 }]);
      }
    }
  };

  const filterCallback = filterData => {
    setFilteredData(filterData.filteredResult);
    setFilter(filterData.filter);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter callbackFilter={filterCallback} dataPersons={persons} />
      <h3>Add a new</h3>
      <Form callbackForm={formCallback} />
      <h3>Numbers</h3>
      <ListPerson
        person={persons}
        filter={filter}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
