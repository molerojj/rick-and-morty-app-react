import React from "react";
import styled from "styled-components";
import Validation from "./Validation";

const DivForm = styled.div`
    text-align: center;
    margin-top: 100px;
    border-radius: 10px;
    width: 400px;
    heigth: 500px;
    background-color: rgba(255, 255, 255, 0.8);
    -moz-box-shadow: 0px 0px 30px #ffffff;
    -webkit-box-shadow: 0px 0px 30px #ffffff;
    box-shadow: 0px 0px 30px #ffffff;
`;

const Inputs = styled.input`
    border: 0;
    border-radius: 2px;
    width: 180px;
    outline: none;
    text-align: center;
    margin: -10px;
`;

const Labels = styled.label`
    text-decoration: none;
    color: #be2421;
    font-weight: bold;
`;

const Button = styled.button`
    background-color: #bf2b21;
    font-size: 15px;
    color: white;
    width: 130px;
    margin-top: -20px;
    border: 0;
    border-radius: 25px;
    padding: 5px;
        &:hover{
            background-color: #fbf976;
            color: #000;
     }
`;

const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 1em;
`;

const H1Form = styled.h1`
   color: white;
   font-size: 3rem;
   padding-top: 50px;
   margin: 0;
   text-shadow: 0 0 0.2em #fff, 0 0 0.2em #b2fc37, 0 0 0.2em #b2fc37;
`;

const Form = (props) => {
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '', 
    });

    const [errors, setErrors] = React.useState([]);

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

    const handleSubmit = (userData) => {
        props.login(userData);
    }

    return (
        <DivForm>
            <H1Form>Login</H1Form>
            <form onChange={handleSubmit}>
            <DivInputs>
                <Labels>Username</Labels>
                <Inputs name="username" onChange={handleInputChange} value={userData.username} type="email"/>
                <p>{errors.username}</p>
                <Labels>Password</Labels>
                <Inputs name="password" onChange={handleInputChange} value={userData.password} type="password" />
                <p>{errors.password}</p>
                <Button type="submit">Login</Button>  
            </DivInputs>
            </form>
        </DivForm>
    )
}

export default Form;