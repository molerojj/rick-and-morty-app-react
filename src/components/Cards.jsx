import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding: 0px 50px;
   margin: 0;
`;

const H1home = styled.h1`
   color: #4e4e4e
   font-size: 3rem;
   font-weight: 400;
   padding-top: 80px;
   margin: 0;
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
 
