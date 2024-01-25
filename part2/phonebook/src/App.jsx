import { useEffect, useState } from 'react';
import Form from './components/Form';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Notification from './components/Notification';
import api from './services/api';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState('success');

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    api.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification status={status} message={message} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <Form
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setStatus={setStatus}
      />
      <h2>Numbers</h2>
      <Persons
        persons={personsToShow}
        setPersons={setPersons}
        setMessage={setMessage}
        setStatus={setStatus}
      />
    </div>
  );
};

export default App;
