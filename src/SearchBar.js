import React, { useState } from 'react';
import './App.css'; // Ensure you include this to apply the styles

const countriesData = [
  { name: "United States", capital: "Washington, D.C." },
  { name: "Canada", capital: "Ottawa" },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
  // Add more countries as needed
];

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = countriesData.filter(
        (country) =>
          country.name.toLowerCase().includes(query.toLowerCase()) ||
          country.capital.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
      <span className="search-icon">🔍</span> 
        <input
          type="text"
          placeholder="Search by country or capital"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && <button className="clear-btn" onClick={clearSearch}>X</button>}
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-item">
              {suggestion.name} - {suggestion.capital}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
