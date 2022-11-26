import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
        navigate("/")
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
        <>
        <div>
            <h1>Name: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Specie: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin.name}</h2>
        </div>
        <div>
            <img src={character.image} alt="" />
        </div>
            <button onClick={backToHome}>Back</button>
        </>
     );


}

export default Detail;