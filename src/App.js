import React from 'react';
import SearchBar from './SearchBar'; // Correct path if SearchBar.js is in the same directory as App.js
 // Correct path if App.js is in the same directory as index.js

function App() {
  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;
