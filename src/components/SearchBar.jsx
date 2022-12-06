import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivAdd = styled.div`
   margin: 20px;
   display: flex;
   justify-content: right;
`;

const InputAdd = styled.input`
   margin-right: 20px;
   border: 50px;
   border-radius: 2px;
   -moz-box-shadow: 0px 0px 30px #ffffff;
   -webkit-box-shadow: 0px 0px 30px #ffffff;
   box-shadow: 0px 0px 30px #ffffff;
`;

const BtnAdd = styled.button`
   font-size: 12px;
   padding: 0px 15px;
   margin-left: 10px;
   background-color: #bf2b21;
   color: #fff;
   border: 1px;
   border-radius: 25px;
      &:hover{
         background-color: #fbf976;
         color: #000;
      }
   -moz-box-shadow: 0px 0px #Fff;
   -webkit-box-shadow: 0px 0px 30px #Fff;
   box-shadow: 0px 0px 30px #Fff;      
`;

const BtnAddF = styled(Link)`
   text-decoration: none;
   font-size: 12px;
   padding: 2px 15px 0px 15px;
   margin-left: 10px;
   background-color: #bf2b21;
   color: #fff;
   border: 1px;
   border-radius: 25px;
      &:hover{
         background-color: #fbf976;
         color: #000;
      }
   -moz-box-shadow: 0px 0px #Fff;
   -webkit-box-shadow: 0px 0px 30px #Fff;
   box-shadow: 0px 0px 30px #Fff;      
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
         <BtnAdd onClick={() => props.onSearch(character)}>Agregar</BtnAdd>
         <BtnAdd onClick={() => props.onSearch(Math.floor(Math.random()*826))}>Random</BtnAdd>
         <BtnAdd onClick={props.logout}>Logout</BtnAdd>
         <BtnAddF to="/favorites">Favorites ❤️</BtnAddF>
      </DivAdd>
   );
} 
