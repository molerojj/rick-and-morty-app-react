import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions/actions';

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

const DivSelectors = styled.div`
    margin-top: 30px;
`;

const Select = styled.select`
    font-family: 'Poppins', sans-serif;
    padding: 0px 15px;
    margin-left: 10px;
    color: #4e4e4e;
    font-size: 13px;
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

const Favorites = ({myFavorites, onClose}) => {

    const dispatch = useDispatch();

    return(
        <>
        <H1Fav>My Favorites Characters</H1Fav>
            <DivSelectors>
                <Select onChange={(e) => dispatch(orderCards(e.target.value))}>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </Select>
                <Select onChange={(e) => dispatch(filterCards(e.target.value))}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </Select>
            </DivSelectors>
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