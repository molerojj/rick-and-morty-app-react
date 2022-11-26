import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivCard = styled.div`
   background-color: white;
   heigth: 320px;
   width: 290px;
   display: flex;
   margin: 47px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
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
   background-color: hwb(0 0% 10%);
   padding: 0px 3px;
   border-radius: 8px;
   text-align: center;
   margin-top: -40px;
`;

const DivDescription = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 2rem;
   font-size: 13px;
`;

const Img = styled.img`
   width: 250px;
   height: 290px;
   border-radius: 10px;
`;

const NameLink = styled(Link)`
   text-decoration: none;
`;

const Card = ({onClose, id, name, species, gender, image, detailId}) => {
   return (
      <DivCard>
         <Button onClick={() => onClose(id)}>X</Button>
         <Img src={image} alt={name}></Img>
         <NameLink to={`/detail/${id}`}>
            <H2name>{name}</H2name>
         </NameLink>
         <DivDescription>
            <h2>{gender}</h2>
            <h2>{species}</h2>
         </DivDescription>
      </DivCard>
   );
}

export default Card;
