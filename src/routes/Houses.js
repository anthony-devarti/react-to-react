import React, { useEffect, useState } from 'react';
import getData from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Houses() {
  const ENDPOINT = 'Houses';
  const [houses, setHouses] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setHouses(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setHouses(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }} className="container">
      <div className="row justify-content-center text-center gap-2">
        <h2>Houses</h2>
        {houses.map((house) => <House key={house.id} House={house} />)}
      </div>
    </main>
  );
}


const House = ({ House }) => {
  return (
    <div className='card col-5 p-3'>
      <h2>{House.name}</h2>
      <div>Colors: {House.houseColours}</div>
      <div>Founder: {House.founder}</div>
      <div>Animal: {House.animal}</div>
      <div>Element: {House.element}</div>
      <div>Ghost: {House.ghost}</div>
      <div>Common Room: {House.commonRoom}</div>
    </div>
  )
}