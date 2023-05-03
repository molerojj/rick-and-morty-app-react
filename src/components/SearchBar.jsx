import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivAdd = styled.div`
   margin: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: right;
   @media screen and (max-width: 768px) {
      justify-content: center;
      gap:20px;
   }
   
   @media screen and (max-width: 700px) {
         justify-content: center;
         gap:20px;
   }
`;

const InputAdd = styled.input`
   margin-right: 20px;
   padding-left: 10px;
   font-size: 11px;
   width: 190px;
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

const BtnAdd = styled.button`
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

const BtnAddF = styled(Link)`
   color: #4e4e4e;
   text-decoration: none;
   padding: 0px 15px;
   margin-left: 10px;
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

export default function SearchBar(props) {

   const [ character, setCharacter ] = useState(""); // Estado interno del SearchBar

   const handleChange = (e) => { // Funcion que obtiene lo que se ingresa en input y lo setea en el estado.
      const { value } = e.target;
      setCharacter(value);
   }

   return (
      <DivAdd>
         <InputAdd type='search' placeholder="Type a number from 1 to 826" onChange={handleChange} name="search" id=""/>
         <BtnAdd onClick={() => props.onSearch(character)}>Add</BtnAdd>
         <BtnAdd onClick={() => props.onSearch(Math.floor(Math.random()*826))}>Random</BtnAdd>
         <BtnAddF to="/favorites">Favorites ❤️</BtnAddF>
         <BtnAdd onClick={props.logout}>Logout</BtnAdd>
      </DivAdd>
   );
} 
