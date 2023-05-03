import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DivDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 30px;
    width: 70%;
    height: 450px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
                -15px -15px 30px #ffffff;
`;

const DivSpecImg = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const DivButton = styled.div`
    display: flex;
    justify-content: end;
`;

const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    width: 55px;
    color: #090909;
    padding: 0.4em 0.8em;
    font-size: 18px;
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

    @media screen and (max-width: 768px) {
        margin: 0;
    }
    
    @media screen and (max-width: 700px) {
        margin: 0;
    }
`;

const DivSpec = styled.div`
    color: #4e4e4e;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
    
    @media screen and (max-width: 700px) {
        font-size: 12px;
    }
`;

const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    border-radius: 25px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;

    @media screen and (max-width: 768px) {
        width: 200px;
        heigth: 200px;
        margin-left: 60px;
    }
    
    @media screen and (max-width: 700px) {
        width: 200px;
        height: 200px;
        margin-left: 60px;
    }
`;

const Img = styled.img`
    border-radius: 15px;
    width: 290px;

    @media screen and (max-width: 768px) {
        width: 160px;
    }
    
    @media screen and (max-width: 700px) {
        width: 160px;
    }
`;

const Detail = () => {
    const { id } = useParams();

    const [ character, setCharacter ] = useState({
        name: "",
		status: "",
		species: "",
		gender: "",
		origin: {},
		location: {},
		image: "",
    });

    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/home");
      }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              console.log(err);
           });
        return setCharacter({
            name: "",
            status: "",
            species: "",
            gender: "",
            origin: {},
            location: {},
            image: "",
        });
     }, [id]);

     return (
        <DivDetail>
            <DivButton>
                <Button onClick={backToHome}>X</Button>
            </DivButton>
            <DivSpecImg>
                <DivSpec>
                    <h1>Name: {character.name}</h1>
                    <h2>Status: {character.status}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin.name}</h2>
                </DivSpec>
                <DivImg>
                    <Img src={character.image} alt="" />
                </DivImg>
            </DivSpecImg>
        </DivDetail>
     );


}

export default Detail;  