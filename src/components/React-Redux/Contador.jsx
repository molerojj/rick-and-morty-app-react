// CREANDO UN CONTADOR REACT-REDUX

import React from "react";
import connect from 'react-redux';
import { increment, decrement } from './action';

class Contador extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <h1>{this.props.contador}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </>
        )
    }
}

// Para recibir el estado global en las props:
// El connect y el provider siempre le van a estar dando conocimiento a estas funciones.

const mapStateToProps = (state) => { // funcion que va a recibir el estado y lo manda a las props.
    return {
        contador: state.contador,
    }
}

const mapDispatchToProps = (dispatch) => { // funcion que va a hacer el dispatch (modificar el estado global)
    return {
        increment: () => {dispatch(increment())},
        decrement: () => {dispatch(decrement())}
    }
}

// estas dos funciones son las que se pasan en connect como parametros. siempre debe recibir las dos.
// Si solo vamos a leer el estado para mostrarlo, usamos mapStateToProps y la otra la colocamos null y viceversa.
// Ejemplo: (mapStateToProps, null) o (null, mapDispatchToProps).

export default connect(mapStateToProps, mapDispatchToProps)(Contador);