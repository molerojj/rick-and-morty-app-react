import React from 'react';
import styled from 'styled-components';

const DivAdd = styled.div`
   margin: 20px;
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
   font-family: montserrat;
   font-size: 11px;
   padding: 3px;
   background-color: #AD4F43;
   color: white;
   border: 1px;
   border-radius: 2px;
   &:hover{
      background-color: #fbf976;
      color: #000;
      border-radius: 2px; solid #AD4F43;
   }
   -moz-box-shadow: 0px 0px #Fff;
   -webkit-box-shadow: 0px 0px 30px #Fff;
   box-shadow: 0px 0px 30px #Fff;      
`;

export default function SearchBar(props) {
   return (
      <DivAdd>
         <InputAdd type='search' />
         <BtnAdd onClick={props.onSearch}>Agregar</BtnAdd>
      </DivAdd>
   );
}
