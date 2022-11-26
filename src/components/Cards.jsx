import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding: 50px;
`;

const H1home = styled.h1`
   color: white;
   font-size: 3rem;
   padding-top: 50px;
   text-shadow: 0 0 0.2em #fff, 0 0 0.2em #b2fc37, 0 0 0.2em #b2fc37;
`;

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
         <>
         <H1home>Welcome to Rick & Morty App</H1home>
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
         </>
   );
}
 
