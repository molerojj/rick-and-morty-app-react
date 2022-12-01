import React from 'react';
import SearchBar from './SearchBar.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavBar = styled.div`
    background-color: #cbfca5;
    display: flex;
    justify-content: space-between;
    width: 100%;
    -moz-box-shadow: 0px 0px 30px #ffffff;
    -webkit-box-shadow: 0px 0px 30px #ffffff;
    box-shadow: 0px 0px 30px #ffffff;
    position:fixed;
    top: 0;
`;

const HomeAbout = styled.div`
    display: flex;
`;

const NavHome = styled(Link)`
    text-decoration: none;
    color: #be2421;
    margin: 20px;
    font-weight: bold;
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