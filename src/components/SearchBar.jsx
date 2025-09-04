import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full mb-6">
      <input
        type="text"
        placeholder="Search city weather..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-3 rounded-l-lg bg-blue-800 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 px-4 py-3 rounded-r-lg hover:bg-green-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
