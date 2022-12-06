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
   color: white;
   font-size: 3rem;
   padding-top: 90px;
   margin: 0;
   text-shadow: 0 0 0.2em #fff, 0 0 0.2em #b2fc37, 0 0 0.2em #b2fc37;
`;


const Favorites = ({myFavorites}) => {
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