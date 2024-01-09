import api from '../services/api';

export default function Persons({ persons, setPersons }) {
  const deletePerson = (id) => {
    if (window.confirm('Delete?')) {
      api.deletePerson(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
        console.log(response.status);
        console.log(persons);
      });
    }
  };
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
