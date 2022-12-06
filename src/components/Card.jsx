import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../redux/actions/actions.js';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const DivCard = styled.div`
   background-color: white;
   heigth: 320px;
   width: 290px;
   display: flex;
   margin: 47px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   -moz-box-shadow: 0px 0px 30px #ffffff;
   -webkit-box-shadow: 0px 0px 30px #ffffff;
   box-shadow: 0px 0px 30px #ffffff;
      
`;

const Button = styled.button`
   background-color: #a71e1d;
   color: white;
   border-radius: 50px;
   border: none;
   margin-left: 80%;
   margin-bottom: 15px;
   &:hover{
      background-color: #fbf976;
      color: #000;
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
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 2rem;
   font-size: 13px;
`;

const Img = styled.img`
   width: 250px;
   height: 290px;
   border-radius: 10px;
`;

const NameLink = styled(Link)`
   text-decoration: none;
`;

const ButtonFav = styled.button`
   border: none;
   background-color: #eef;
   margin-right: 80%;
   margin-top: 15px;
   border-radius: 20px;
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
         {  isFav ? (
            <ButtonFav onClick={handleFavorite}>❤️</ButtonFav>
            ) : (
            <ButtonFav onClick={handleFavorite}>🤍</ButtonFav>
            )
         }
         <Button onClick={() => onClose(id)}>X</Button>
         <Img src={image} alt={name}></Img>
         <NameLink to={`/detail/${id}`}>
            <H2name>{name}</H2name>
         </NameLink>
         <DivDescription>
            <h2>{gender}</h2>
            <h2>{species}</h2>
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
