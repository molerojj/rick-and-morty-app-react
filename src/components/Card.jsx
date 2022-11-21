import React from 'react';
import styled from 'styled-components';

const DivCard = styled.div`
   background-color: white;
   heigth: auto;
   width: 330px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   margin: 50px;
   -moz-box-shadow: 0px 0px 30px #ffffff;
   -webkit-box-shadow: 0px 0px 30px #ffffff;
   box-shadow: 0px 0px 30px #ffffff;
      
`;

const Button = styled.button`
   background-color: #a71e1d;
   color: white;
   border-radius: 50px;
   border: none;
   margin-left: 80%;
   margin-top: 15px;
   margin-bottom: 15px;
   &:hover{
      background-color: #fbf976;
      color: #000;
   }
`;

const H2name = styled.h2`
   color: white;
   font-size: 16px;
   margin-top: -40px;
   margin-left: -160px;
   background-color: hwb(0 0% 10%);
   padding: 0px 3px;
   border-radius: 8px;
`;

const DivDescription = styled.div`
   display: flex;
   flex-direction: row;
   gap: 3rem;
`;


const Card = ({onClose, id, name, species, gender, image}) => {
   return (
      <DivCard>
         <Button onClick={() => onClose(id)}>X</Button>
         <img src={image} alt={name} />
         <H2name>{name}</H2name>
         <DivDescription>
            <h2>{gender}</h2>
            <h2>{species}</h2>
         </DivDescription>
      </DivCard>
   );
}

export default Card;
