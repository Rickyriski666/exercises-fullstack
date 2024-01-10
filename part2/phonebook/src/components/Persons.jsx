import api from '../services/api';

export default function Persons(props) {
  const { persons, setPersons, setMessage, setStatus } = props;

  const deletePerson = async (person) => {
    const { id, name } = person;

    if (window.confirm('Delete?')) {
      try {
        await api.deletePerson(id).then((response) => {
          setPersons(persons.filter((person) => person.id !== id));
          console.log(response.status);
          console.log(persons);
        });
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 404) {
          setMessage(
            `Information of ${name} has already been removed from server`
          );
          setStatus('error');
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }
      }
    }
  };
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={() => deletePerson(person)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
