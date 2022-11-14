import Card from './Card';
import './cards.css';

export default function Cards(props) {
   const { characters } = props;
   return <div className="cards">
      {characters.map(e => (
         <Card name={e.name}
               species={e.species}
               gender={e.gender}
               image={e.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
      ))}
   </div>;
}
