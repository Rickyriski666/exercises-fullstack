import React, { useEffect, useState } from 'react';

function Filter({ callbackFilter, dataPersons }) {
  const [filter, setFilter] = useState('');

  const filterHandler = e => {
    const inputFilter = e.target.value.toLowerCase();
    setFilter(inputFilter);
  };
  useEffect(() => {
    const filteredResult = dataPersons.filter(
      person =>
        person.name.toLowerCase().includes(filter) ||
        person.number.toLowerCase().includes(filter)
    );
    callbackFilter({ filteredResult, filter });
  }, [filter]);

  return (
    <div>
      filter shown with
      <input value={filter} onChange={filterHandler} />
    </div>
  );
}

export default Filter;
