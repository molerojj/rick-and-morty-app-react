import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from './Card';

const DivFavs = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding: 0px 50px;
   margin: 0;
`;

const H1Fav = styled.h1`
    color: #4e4e4e
    font-size: 3rem;
    font-weight: 400;
    padding-top: 90px;
    margin: 0;
`;

const Favorites = ({myFavorites, onClose}) => {
    return(
        <>
        <H1Fav>My Favorites Characters</H1Fav>
        <DivFavs>
            {myFavorites.map((fav, index) => (<Card 
               key={index}
               name={fav.name}
               species={fav.species}
               gender={fav.gender}
               image={fav.image}
               id={fav.id}
               onClose={onClose}
             />))}
        </DivFavs>
        </>
    )
}


export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    } 
}

export default connect (mapStateToProps, null)(Favorites);