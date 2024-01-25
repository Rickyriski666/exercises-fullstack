const updatePerson = (setPerson, id, newNumber) => {
  setPerson((prevPerson) => {
    prevPerson.map((item) =>
      item.id === id ? { ...item, number: newNumber } : item
    );
  });
};

export default updatePerson;
