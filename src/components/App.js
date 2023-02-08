import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App({ updateSearch }) {

  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listings) => setListings(listings));
  }, []);

  function removeListing(id) {
    const newListingsArray = listings.filter((listing) => listing.id!== id);
    setListings(newListingsArray);
  }

  function updateSearch(searchValue) {
    setSearchTerm(searchValue);
  }

  const filteredListings = listings.filter((listing) => {
    const lowerCaseDescription = listing.description.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCaseDescription.includes(lowerCaseSearchTerm);
  });


  return (
    <div className="app">
      <Header searchTerm={searchTerm} updateSearch={updateSearch} />
      <ListingsContainer
        listings={filteredListings}
        removeListing={removeListing}
      />
    </div>
  );
}

export default App;
