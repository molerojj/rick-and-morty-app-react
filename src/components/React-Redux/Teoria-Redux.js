
/* Redux se viene a presentar el inconveniente de pasar propiedades (padre a hijo).
    El ir pasando propiedades por componentes hasta que llegue a su destino.
    Que se modifica en un componente y se muestra en otro componente.

    La libreria Redux nos permite tener un stock global.

    Un unico lugar donde se almacena un estado global de la aplicacion. 

    Podra ser leido y utilizado por un componente sin importar desde donde este directamente.

    Ademas de tener con React estados globales, vamos a ter un estado global.(STORE)

    El estado de toda la app se almacena dentro de un solo Store.

    Desde cualquier componente podemos hacer una modificacion del estado global.

    No todos los componentes necesariamente deben estar conectados al estado global.

    Los componentes se subscriben al STORE para poder acceder al estado global (No es obligatorio)

    Un componente subscrito puede hacer una modificacion y los otros componentes se van a enterar de
    que se ha cambiado el estado global.

    El estado global no reemplaza a los estados locales que los componentes necesiten.

    El estado es de solo lectura.

    La unica manera de modificar el estado es emitiendo una accion, un objetod escribiendo lo que paso.

    Los cambios se aplican con funciones puras.

    Para escpecificar como el estado se transforma a partir de las acciones, escribimos reducers puras.

    Modificacion del estado:

    Reducer: Es una funcion

    Dispatch: Cuando quiero modificar algo del Store con una Action.
    Llega al Reducer y el se encarga de modificar el estado Global cuando recibe la Action.

    STORE

    State {
        num: 1
        visib: true
        amigos: []
    }

    Action es un objeto que tiene una propiedad que es el {Que quiero que haga}.
    Action ---> type: "add_friends"
          |---> payload: "Jonathan"

    
    Time to code:

    Instalar Redux: npm i redux@4.0.5 (la vieja confiable)

*/

// importar Redux:

const redux = require("redux");

// estado inicial:

const initialState = {
    num: 0,
    visibility: true,
    name: "",
    amigos: [],
};

// El Reducer (la personita que cambia el estado):

const reducer = (state = initialState, action) => { // recibe dos cosas (Estado "para poder modificarlo") y (Action)    
    switch(action.type){
        case "AUMENTAR":
            return { 
                ...state,
                num: state.num + 1,
            };
        case "DECREMENTAR":
            return { 
                ...state,
                num: state.num - 1,
            };
        case "CAMBIAR_NOMBRE":
            return { 
                ...state,
                name: action.payload,
            };
        case "ADD_FRIEND":
            return {
                ...state,
                amigos: [...state.amigos, action.payload]
            }
        case "DELETE_FRIEND":
            return {
                ...state,
                amigos: state.amigos.filter((amigo) => amigo.id !== action.payload)
            }
        default:
            return {...state};
    }
};

// Creando nuestro Store:

const store = redux.createStore(reducer);

//                      ACTIONS

const action = {
    type: "AUMENTAR",
}

const action2 = {
    type: "DECREMENTAR"
}

const action3 = {
    type: "CAMBIAR_NOMBRE"
    payload: "Jonathan"
}

// el metodo que nos permite ver como esta el estado:

console.log(store.getState());

// este seria el estado actual antes del dispatch:

// { num: 0, visibility: true, name: "", amigos: [] }

// como enviamos los mensajes al reducer:

store.dispatch(action);

// ahora que despachamos, veremos que el store ha cambiado

console.log(store.getState());
// { num: 1, visibility: true, name: "", amigos: [] }

store.dispatch({type: "CAMBIAR_NOMBRE" payload: "Jonathan"}); // Action por Dispatch

console.log(store.getState());

// Ahora el estado global es:

// { num: 1, visibility: true, name: "Jonathan", amigos: [] }



                        /* ACTION CREATOR  (Lo que realmente usamos)*/

const cambiarNombre = (name) => {
    return { type: "CAMBIAR_NOMBRE", payload: name};
}

store.dispatch(cambiarNombre("Jonathan"));

console.log(store.getState());

// Ahora el estado global es:

// { num: 1, visibility: true, name: "Jonathan", amigos: [] }

const addFriend = (friend) => {
    return { type: "ADD_FRIEND", payload: friend}
}

store.dispatch(addFriend("Jonathan"));

console.log(store.getState());

// Ahora el estado global es:

// { num: 1, visibility: true, name: "Jonathan", amigos: ["Jonathan"] }

//                  AHORA

const addFriend = (friendName, id) => {
    return { type: "ADD_FRIEND", payload: {name: friendName, id: id}}
}

store.dispatch(addFriend("Jonathan", 1));

console.log(store.getState());

// Ahora el estado global es:

// { num: 1, visibility: true, name: "Jonathan", amigos: [ {name: "Jonathan" id: 1} ] }

store.dispatch(addFriend("PutAnguila", 2));

console.log(store.getState());

// Ahora el estado global es:

// { num: 1, visibility: true, name: "Jonathan", amigos: [ {name: "Jonathan" id: 1}, {name: "PutAnguila" id: 2}] }

const deleteFriend = (id) => {
    return { type: "DELETE_FRIEND", payload: id}
}

store.dispatch(deleteFriend(2));

console.log(store.getState());

// Ahora el estado global es:

// { num: 1, visibility: true, name: "Jonathan", amigos: [ {name: "Jonathan" id: 1} ] }