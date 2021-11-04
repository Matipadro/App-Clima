import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

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
      {/* <hr /> */}
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> */}
      {/* <hr /> */}
      <div className="Cards-content">
        <Cards
          cities={data}
        />
      </div>
      
    </div>
  );
}

export default App;
