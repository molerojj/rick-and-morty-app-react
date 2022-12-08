/*
    Los hooks son como una pequeña API que nos permite en los componentes funcionales hacer
    cosas que hacemos en los componentes de clases.

    useState:
        permite guardar estados en componentes funcionales.

        Es una funcion que devuelve un arreglo con dos valores
            1. variable con el vaor del estado.
            2. funcion que se usa para actualizar el estado.

    useEffect:
        Permite realizar efectos secundarios en componentes funcionales.
        Nos permite manejar el ciclo de vida del componente.

*/

// useState() => Crear estados locales
// useEffect() => Vamos a pedirle que sucedan cosas cuando el componente se monta, cuando se vuelve a 
// renderizar, y cuando se desmonta. 
// Es el reemplazo del DidMount, WillUnmount, DidUpdate. va a estar manejado en un solo useEffect.
// Puedo tener varios useEffect.
// recibe 2 parametros: 
//  1, el que quiero hacer cuando el componente se monta o se actualiza.
//  2, recibe un array de dependencias. (se le pueden dar variables).
//      cuando esta variable se modifique, el useEffect hace lo que debe hacer.

/*
    useEffect(() => {
        anda a buscar la info => Mount
    }, [variable]);

*/

// useDispatch => 

// useSelector => mapStateToProps (permite guardar una parte del estado global)

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, cleanDetail } from 'su localidad'

const Movie = (props) => {

    const movieId = props.match.params.id;
    const dispatch = useDispatch(); // mapDispatchToProps
    const movieDetail = useSelector((state) => state.movieDetail); // mapStateToProps

    useEffect(() => {
        dispatchEvent(getMovieDetail(movieId)) // component DidMount
        return function () { // component DidUnmount
            dispatch (cleanDetail());
         };
    },[dispatch, movieId]); // cambia dispath o movieId, volve a renderizar. (component DidUpdate)

    return (
        <div>
            <h4>{movieDetail.title}</h4>
            <p>{movieDetail.Year}</p>
            <img src={movieDetail.Poster} alt="icon"></img>
            <p>{movieDetail.Plot}</p>
        </div>
    )
}