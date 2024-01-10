import { useState } from 'react';
import api from '../services/api';

export default function Form(props) {
  const { persons, setPersons, setMessage } = props;

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * 1000)
    };

    const isDuplicateName = persons.find((dataPerson) => {
      return dataPerson.name.toLowerCase() === newPerson.name.toLowerCase();
    });

    const isDuplicateNumber = persons.find((dataPerson) => {
      return dataPerson.number === newPerson.number;
    });

    if (isDuplicateName) {
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        api.update(isDuplicateName.id, newPerson).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== isDuplicateName.id ? person : response.data
            )
          );
          setNewName('');
          setNewNumber('');
        });
      }
    } else if (isDuplicateNumber) {
      if (
        window.confirm(
          `${newPerson.number} is already added to phonebook as ${isDuplicateNumber.name}, replace the old number with a new one?`
        )
      ) {
        api.update(isDuplicateNumber.id, newPerson).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== isDuplicateNumber.id ? person : response.data
            )
          );
          setNewName('');
          setNewNumber('');
        });
      }
    } else {
      api.create(newPerson).then((response) => {
        setPersons([...persons, response.data]);
        setNewName('');
        setNewNumber('');
        setMessage(`Added ${newPerson.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input type="number" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
