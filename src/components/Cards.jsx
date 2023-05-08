import Card from './Card';
import styled from 'styled-components';
import video from '../img/rymvideo.mp4';

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding: 0px 50px;
   margin: 0;
`;

const Video = styled.video`
   height: 550px;
   margin-top:
   @media screen and (max-width: 768px) {
      width: 500px;
   }
   
   @media screen and (max-width: 700px) {
      width: 500px;
   }
`;

export default function Cards(props) {

   const { characters, onClose } = props;
   return (
         <>
            { characters.length > 0
            ? <DivCards>
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
            : <Video muted autoPlay loop src={video} type='video/mp4' ></Video> }
         </>
   );
}
