import React from 'react';
import './styles/Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onRemove}) {
  return (
    <div className='cards'>
      {cities.map((city) => (
      <Card
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          id={city.id}
          onClose={() => onRemove(city.id)}
        />
      ))}
    </div>
  );
}
