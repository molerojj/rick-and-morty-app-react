import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`;

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <DivCards>
         {characters.map((char)=> (
            <Card 
               key={char.name} 
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               id={char.id}
               onClose={onClose}
             />
         ))}
      </DivCards>
   );
}
 
