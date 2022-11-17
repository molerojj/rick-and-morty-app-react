import './App.css'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';
import styled from 'styled-components';
import img from './img/ricknmorty.jpeg';

const DivPrimary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  heigth: auto%;
  width: auto%;
  background-image: url(${img});
`;

function App () {
  return (
    <DivPrimary>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </DivPrimary>
  )
}

export default App
