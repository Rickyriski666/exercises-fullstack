import { useState } from 'react';

function Form({ callbackForm }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const newNameHandler = e => {
    setNewName(e.target.value);
  };
  const newNumberHandler = e => {
    setNewNumber(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const newPersonObject = {
      name: newName,
      number: newNumber
    };

    if (newPersonObject.name) {
      console.log('true');
    } else {
      console.log('false');
    }

    callbackForm(newPersonObject);
    setNewName('');
    setNewNumber('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        name:
        <input value={newName} onChange={newNameHandler} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={newNumberHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default Form;
