import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import Menu from './Menu.jsx'

function CharacterList() {
  const [characterData, setCharacterData] = useState([]); 
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCharacterData(data.results);
      })
      .catch(error => console.log('Error de datos de API:', error));
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characterData.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} width="50" height="50" /> {character.name}
          </li>
        ))}
      </ul>
      <Link to="/" id="back-link">Back</Link>
    </div>
  );
}
export default CharacterList;