// 
import React, { useState } from 'react';


type Props = {
  onSearch: (location: any) => void;
};

export function MapboxSearch({ onSearch }: Props) {
  const [searchText, setSearchText] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const search = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=pk.eyJ1IjoiZ216YWNhcmlhcyIsImEiOiJjbGFuc3o5eDgwaWRjM25zNHV0YWQzNjNnIn0.mB9Bx5JB1odq3Oq6vb4OcQ`
      );
      const data = await response.json();
      const location = data.features[0];
      onSearch(location);
      console.log({searchText})
    } catch (err) {
      console.log('Error searching for location: ', err);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a location"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
