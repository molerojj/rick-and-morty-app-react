import React from 'react';
import SearchBar from './SearchBar.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavBar = styled.div`
    background-color: #ccda8d;
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

const NavAbout = styled(Link)`
    text-decoration: none;
    color: #be2421;
    margin: 20px;
    font-weight: bold;
`;

export default function Nav(props){
    return(
        <NavBar>
            <HomeAbout>
                <NavHome to="/">Home</NavHome>
                <NavAbout to="/about">About</NavAbout>
            </HomeAbout>
            <SearchBar onSearch={props.onSearch}/>
        </NavBar>
    )
}