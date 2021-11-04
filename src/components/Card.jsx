import React from 'react';
import './styles/Card.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {

  function handleOnClose() {
    if(typeof onClose === "function") onClose();
  }

    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={handleOnClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
        <Link className="card-title" to={`/ciudad/${id}`} >
          <h5 >{name}</h5>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

Card.propTypes ={
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};