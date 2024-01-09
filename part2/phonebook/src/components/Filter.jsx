export default function Filter({ filter, setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label>Filter shown with : </label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}
