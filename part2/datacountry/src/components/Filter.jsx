export default function Filter({ setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form>
        find countries : <input type="text" onChange={handleSearch} />
      </form>
    </div>
  );
}
