import React from 'react';
import styled from 'styled-components';
import Imagen from '../img/perfil.png'

const H2about = styled.h2`
    margin: 100px 0 40px 0;
    color: #4e4e4e;
    font-size: 20px;
`;

const DivAbout = styled.div`
    margin-bottom: 20px;
    display: flex;
    width: 85%;
    justify-content: space-between;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
                -15px -15px 30px #ffffff;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
        
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const DivP = styled.div`
    margin: 20px 30px 20px 0px;
`;

const P = styled.p`
    font-size: 13px;
    color: #484848;
    @media screen and (max-width: 768px) {
        text-align: justify;
        padding-left: 30px;
    }
    
    @media screen and (max-width: 700px) {
        text-align: justify;
        padding-left: 30px;
    }
`;

const Img = styled.img`
    margin-top: 35px;
    width: 350px;
    height: 350px;
    @media screen and (max-width: 768px) {
        padding-left: 30px;
    }
    
    @media screen and (max-width: 700px) {
        padding-left: 30px;
    }
`;

export default function About(){
    return (
        <>
        <H2about>Por: Jonathan Molero PT10A</H2about>
        <DivAbout>
            <a tittle="perfil" href="https://www.instagram.com/jonathanmolero" target="_blank" rel="noreferrer"><Img src={Imagen} alt="perfil"></Img></a>
            <DivP>
                <P> <b>Rick & Morty</b> es una aplicación que he disfrutado desde el momento uno de su desarrollo. 
                    Me ha desafiado muchas veces, pero más son las que he sentido satisfacción de poder ver de 
                    lo que soy capaz de aprender y aplicar.</P>

                <P> Esta aplicación se fué construyendo de la mano con cada tema que íbamos aprendiendo en el 
                <a tittle="perfil" href="https://www.soyhenry.com/" target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}}><b> Bootcamp de Soy Henry</b></a> en el modulo de <b>Front-End</b>. Cada tarea nos daba como desafío poder 
                    aplicar lo aprendido en esta aplicación.</P>
                
                <P> <b>Rick & Morty</b> es una aplicación que inicialmente te solicita un login para acceder y luego 
                    poder ver una serie de Cards de cada personaje de la serie de tv Rick & Morty que puedes ir agregando mediante un botón 
                    random el cual selecciona aleatoriamente un personaje mediante un ID o a traves del input en el cual puedes 
                    escribir el ID de un personaje deseado entre el 1 y el 826 (que son los personajes que nos brinda la API). 
                    Adicionalmente puedes ver información mas detallada de cada personaje haciendo clic en 
                    su nombre y puedes anexarlo a una lista de favoritos.</P>

                <P> Este App quedará siempre como el recuerdo de esa primera aplicación que desarrollas, traerá 
                    nostalgia y buenos recuerdos cuando en unos años mas adelante veas todo de lo que has sido capaz.</P>
                
                <P> Sin mas, y sin olvidar dar las gracias también a estos amigos eternos que nos da el Bootcamp y 
                    que estuvieron durante este desarrollo: 
                    <a tittle="perfil" href="https://www.instagram.com/saanti_arguello/" target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}}><b> Santi Arguello (La P*ta Anguila)</b></a> y 
                    <a tittle="perfil" href="https://www.instagram.com/agustinpetrini/" target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}}><b> Agustin Petrini (Mi Amigo 133)</b></a> =).</P>
            </DivP>
        </DivAbout>
        </>
    );
}