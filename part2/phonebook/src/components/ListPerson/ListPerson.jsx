import React from 'react';

function ListPerson({ person, filter, filteredData }) {
  return (
    <ul>
      {filter === ''
        ? person.map(person => (
            <li key={person.id}>
              {person.name}: {person.number}
            </li>
          ))
        : filteredData.map(person => (
            <li key={person.id}>
              {person.name}: {person.number}
            </li>
          ))}
    </ul>
  );
}

export default ListPerson;
