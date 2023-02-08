import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {

  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite((currentFavorite =>!currentFavorite));
  }

  function handleDelete() {
    removeListing(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
