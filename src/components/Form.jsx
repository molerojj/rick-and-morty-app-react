import React from "react";
import styled from "styled-components";
import Validation from "./Validation";

const DivForm = styled.div`
    padding: 30px;
    text-align: center;
    margin-top: 120px;
    width: 250px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
`;

const Inputs = styled.input`
    color: #5a5a5a;
    font-size: 11px;
    margin: 0;
    padding: 3px;
    width: 120px;
    outline: none;
    text-align: center;
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

const Labels = styled.label`
    text-decoration: none;
    color: #4e4e4e;
    font-weight: 400;
    padding-bottom: 5px;
`;

const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 1px 15px;
    margin-left: 10px;
    margin-top: 20px;
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

const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1Form = styled.h1`
    margin: 0;
    padding-bottom: 15px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 3rem;
`;

const P = styled.p`
    font-size: 9px;
    color: red;
`;

const User = styled.p`
    font-size: 9px;
    color: black;
    margin: 0;
    padding: 0;
`;

const Form = (props) => {
    const [userData, setUserData] = React.useState({ 
        username: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });

        setErrors(
            Validation({
            ...userData,
            [e.target.name]: e.target.value,
            }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <DivForm>
            <H1Form>Login</H1Form>
            <form onSubmit={handleSubmit}>
            <DivInputs>
                <Labels>Username</Labels>
                <Inputs name="username" onChange={handleInputChange} value={userData.username} type="email"/>
                <P>{errors.username}</P>
                <Labels>Password</Labels>
                <Inputs name="password" onChange={handleInputChange} value={userData.password} type="password" />
                <P>{errors.password}</P>
                <User>mail: ejemplo@gmail.com</User>
                <User>pw: password12</User>
                <Button type="submit">GO!</Button>  
            </DivInputs>
            </form>
        </DivForm>
    )
}

export default Form;