import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import Menu from './Menu.jsx'

function LocationList() {
  const [locationData, setlocationData] = useState([]); 
  const apiUrl = 'https://rickandmortyapi.com/api/location/';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setlocationData(data.results);
      })
      .catch(error => console.log('Error de datos de API:', error));
  }, []);

  return (
    <div>
      <h1>Location List</h1>
      <ul>
        {locationData.map((location) => (
          <li key={location.id}>
            <p>{location.type} <a href={location.url}>{location.name}</a> </p>
          </li>
        ))}
      </ul>
      <Link to="/" id="back-link">Back</Link>
    </div>
  );
}
export default LocationList;