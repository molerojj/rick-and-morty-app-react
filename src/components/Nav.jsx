import React from 'react';
import SearchBar from './SearchBar.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position:fixed;
    top: 0;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all .3s;
    box-shadow: 6px 6px 12px #c5c5c5,
               -6px -6px 12px #ffffff;
`;

const HomeAbout = styled.div`
    display: flex;
`;

const NavHome = styled(Link)`
    text-decoration: none;
    color: #4e4e4e;
    margin: 20px;
    color: #090909;
    padding: 0.1em 0.6em;
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

export default function Nav (props){
    return(
        <NavBar>
            <HomeAbout>
                <NavHome to="/home">Home</NavHome>
                <NavHome to="/about">About</NavHome>
            </HomeAbout>
            <SearchBar onSearch={props.onSearch} logout={props.logout}/>
        </NavBar>
    )
}