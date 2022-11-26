import React from 'react';
import styled from 'styled-components';

const H1about = styled.h1`
    color: white;
    font-size: 3rem;
    padding-top: 80px;
    margin: 0;
    text-shadow: 0 0 0.2em #fff, 0 0 0.2em #b2fc37, 0 0 0.2em #b2fc37;
`;

const H2about = styled.h1`
    color: white;
    font-size: 20px;
    margin: 0;
    text-shadow: 0 0 0.2em #fff, 0 0 0.2em #b2fc37, 0 0 0.2em #fff;    
`;

export default function About(){
    return (
        <>
        <H1about>ABOUT RICK & MORTY</H1about>
        <H2about>Por: Jonathan Molero PT10A</H2about>
        </>
    );
}