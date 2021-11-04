import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './styles/Ciudad.css';

const apiKey = `4ae2636d8dfbdc3044bede63951a019b`;

export default function Ciudad() {

    const [city, setCity] = useState(undefined); 
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCity(ciudad);
        } else {
            setCity(null);
        }
      });
    }, [id]); 

    return (
        <>
        {city === undefined && <h1>Cargando...</h1>}
        {city === null && <h1>Ciudad no encontrada.</h1>}
        {city && (<div className="ciudad">
                <div className="container">
                    <h3>{city.name}</h3>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
        )}
    </> 
    );
}