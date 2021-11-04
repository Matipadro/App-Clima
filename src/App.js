import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Weather APP</h1>
        <div className="search">
          <SearchBar
              onSearch={(ciudad) => alert(ciudad)}
          />
        </div>
      </div>
      <div className="Cards-content">
        <Cards
          cities={data}
        />
      </div>
      
    </div>
  );
}

export default App;
