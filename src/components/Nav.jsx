import React from 'react';
import SearchBar from './SearchBar.jsx';
import styled from 'styled-components';

const NavBar = styled.div`
    background-color: ;
    width: 100%;
    -moz-box-shadow: 0px 0px 30px #ffffff;
    -webkit-box-shadow: 0px 0px 30px #ffffff;
    box-shadow: 0px 0px 30px #ffffff;
`;

export default function Nav(props){
    return(
        <NavBar>
            <SearchBar onSearch={props.onSearch}/>
        </NavBar>
    )
}