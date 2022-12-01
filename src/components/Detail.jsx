import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DivDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 110px;
    padding: 20px;
    width: 70%;
    height: 450px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    -moz-box-shadow: 0px 0px 30px #ffffff;
    -webkit-box-shadow: 0px 0px 30px #ffffff;
    box-shadow: 0px 0px 30px #ffffff;
`;

const DivSpecImg = styled.div`
    display: flex;

    justify-content: space-around;
`;

const Button = styled.button`
    background-color: #bf2b21;
    border: none;
    color: white;
    margin-left: 95%;
    margin-top: -40px;
    margin-bottom: 40px;
    border-radius: 25px;
    width: 30px;
    height: 30px;
    &:hover{
        background-color: #fbf976;
        color: #000;
     }
`;

const DivSpec = styled.div`
    color: #16315b;
`;

const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    width: 320px;
`;

const Img = styled.img`
     border-radius: 3px;
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
            <Button onClick={backToHome}>X</Button>
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