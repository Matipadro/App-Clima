import React from 'react';
import styles from './styles/Card.module.css';
import CardTemp from './CardTemp';
import PropTypes from "prop-types";

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código

  function handleOnClose(){
    if(typeof onClose === 'function') onClose();
  }

  return (<div className={styles.cardBox}>
    <h2>{name}</h2>
    <div className={styles.state}>
        <div>
            <CardTemp label='Min' value={min} />
            <CardTemp label='Max' value={max} />
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono clima" />
    </div>
    <button onClick={handleOnClose}>X</button>
  </div>);
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
