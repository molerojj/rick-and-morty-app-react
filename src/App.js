import './App.css'
import Cards from './components/Cards.jsx';
import styled from 'styled-components';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const DivPrimary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  heigth: auto%;
  width: auto%;
`;

function App () {

const [ characters, setCharacters ] = useState([]);

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
};

const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== id)
  );
};

  return (
    <DivPrimary>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route exact path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail characters={characters} onClose={onClose} />} />
      </Routes>
    </DivPrimary>
  );
}

export default App;
