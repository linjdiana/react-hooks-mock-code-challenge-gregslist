import React, { useState } from "react";

function Search({ updateSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(searchInput);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
