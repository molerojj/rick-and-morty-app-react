import './App.css'
import Cards from './components/Cards.jsx';
import styled from 'styled-components';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Form from './components/Form';

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
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = 'password12';
  const location = useLocation();

function onSearch(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
          if (!characters.find(el => el.id === Number(id)))
            setCharacters((oldChars) => [...oldChars, data]);
          else
            window.alert('El personaje con este ID ya se encuentra agregado');
        } 
        else {
           window.alert('No hay personajes con ese ID');
        }
     });
     navigate('/home');
};

const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== id)
  );
};

function login (userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   } else {
      alert('La contraseña es incorrecta')
   }
}

function logout () {
  setAccess(false);
  navigate("/");
}

/* eslint-disable */
useEffect(() => {
  !access && navigate("/");
}, [access]);
/* eslint-disable */

  return (
    <DivPrimary>
        {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route exact path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail characters={characters} onClose={onClose} />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
      </Routes>
    </DivPrimary>
  );
}


export default App;