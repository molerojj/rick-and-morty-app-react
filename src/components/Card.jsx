import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../redux/actions/actions.js';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const DivCard = styled.div`
   heigth: 320px;
   width: 290px;
   display: flex;
   margin: 47px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 30px;
   background: #e0e0e0;
   box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
`;

const Buttons = styled.div`
   display: flex;
   margin: 20px;
   justify-content: flex-end;
`;

const Button = styled.button`
   font-family: 'Poppins', sans-serif;
   color: #090909;
   margin-left: 150px;
   padding: 0.4em 0.8em;
   font-size: 18px;
   border-radius: 0.5em;
   background: #e8e8e8;
   border: 1px solid #e8e8e8;
   transition: all .3s;
   box-shadow: 6px 6px 12px #c5c5c5,
               -6px -6px 12px #ffffff;

   &:hover {
      border: 1px solid white;
   }

   &:active {
      box-shadow: 4px 4px 12px #c5c5c5,
               -4px -4px 12px #ffffff;
   }         
`;

const H2name = styled.h2`
   color: white;
   font-size: 16px;
   background-color: hwb(0 0% 10%);
   padding: 0px 3px;
   border-radius: 8px;
   text-align: center;
   margin-top: -40px;
`;

const DivDescription = styled.div`
   color: #4e4e4e;
   display: flex;
   gap: 10px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 13px;
   margin: 5px;
`;

const H2descr = styled.h2`
   margin: 0;
`;

const Img = styled.img`
   width: 250px;
   height: 290px;
   border-radius: 0.5em;
   background: #e8e8e8;
   border: 1px solid #e8e8e8;
   transition: all .3s;
   box-shadow: 6px 6px 12px #c5c5c5,
               -6px -6px 12px #ffffff;

   &:hover {
      border: 1px solid white;
   }
`;

const NameLink = styled(Link)`
   text-decoration: none;
`;

const ButtonFav = styled.button`
   color: #090909;
   padding: 0.3em 0.7em;
   font-size: 18px;
   border-radius: 0.5em;
   background: #e8e8e8;
   border: 1px solid #e8e8e8;
   transition: all .3s;
   box-shadow: 6px 6px 12px #c5c5c5,
            -6px -6px 12px #ffffff;

   &:hover {
      border: 1px solid white;
   }

   &:active {
      box-shadow: 4px 4px 12px #c5c5c5,
               -4px -4px 12px #ffffff;
   }  
`;

const Card = ({onClose, id, name, species, gender, image, myFavorites, addFavorite, deleteFavorite}) => {

   const [ isFav, setIsFav ] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({onClose, id, name, species, gender, image});
      }
   }

   return (
      <DivCard>
         <Buttons>
         {  isFav ? (
            <ButtonFav onClick={handleFavorite}>❤️</ButtonFav>
            ) : (
            <ButtonFav onClick={handleFavorite}>🤍</ButtonFav>
            )
         }
         {useLocation().pathname !== '/favorites' && <Button onClick={() => onClose(id)}>X</Button>}
         </Buttons>
         <Img src={image} alt={name}></Img>
         <NameLink to={`/detail/${id}`}>
            <H2name>{name}</H2name>
         </NameLink>
         <DivDescription>
            <H2descr>{gender}</H2descr>
            <H2descr>{species}</H2descr>
         </DivDescription>
      </DivCard>
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   } 
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: (favorite) => {dispatch(addFavorite(favorite))},
      deleteFavorite: (id) => {dispatch(deleteFavorite(id))}
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
