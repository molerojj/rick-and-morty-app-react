import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`;

export default function Cards(props) {
   const { characters } = props;
   return <DivCards>
      {characters.map(e => (
         <Card name={e.name}
               species={e.species}
               gender={e.gender}
               image={e.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
      ))}
   </DivCards>;
}

