/*
    Componentes presentacionales vs Containers.
    Tambien llamados Smart y Dumbs components.

    Smart: 

    - Como funcionan las cosas
    - Poco o nada de DOM.
    - Sin estilos.
    - Provee datos.
    - Invoca las acciones.

    Dumb:

    - Como se ven las cosas.
    - Trabaja con sus props.
    - Generalmente no tienen estado propio. (Algunos si)

    Ej: Componente Cards: (Smart). Tiene una logica dentro. mapear el array, etc.

        Componente Card: (Dumb). No tenia que pensar mucho, mostraba las props que recibia. 

*/

/*                          Como se conectaria React con Redux                              

    Vamos a trabajar con la importacion de:

    React
    Redux
    React-Redux


    1. Abrazar al componente App con la etiqueta pasandole al store por propiedad:

        Exportar el store.js y traerlo al componente App.
    
        <Provider store = {store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>

    2. A traves de una funcion, pasar las propiedades (Estado Global, Action, Dispatch) al componente para 
        que tenga acceso por sus props. (meter el estado global al componente).

        Si se modifica el estado global, se modifican las props, si se modifican las props, se renderiza
        el componente.
    
    3. Armar unas funciones que van a hacer dispatch. fn(){dispatch ...} van tambien a ser pasadas a props.

        Ej: Para los botones: onClick={this.props.incremento} incremento es una funcion que hace dispatch.
    
*/

/*                            Al codigo                         */


// Instalar npm i redux@4.0.5 react-redux redux-thunk

// Creamos los modulos:

//  action.js

    // Aca esta la sintaxis del llamado a la API para el ejemplo de User.

   export const INCREMENT = "INCREMENT";
   export const DECREMENT = "DECREMENT";
   export const GET_USERS = "GET_USERS";

   export const increment = () => {
        return { type: INCREMENT }
   };
   
   export const decrement = () => {
        return { type: DECREMENT }
   };

   export const getUsers = () => {
        return function(dispatch){ // Esta funcion hace la llamada a la API y hace un dispatch de la action.
            fetch("http...... link del api") // hace la peticion
                .then(response => response.json()) // la recibe y la transforma en un objeto
                .then(data => dispatch({type: GET_USERS, payload: data})) // con el obj data se hace el dispatch.
        };
   };
   


// reducer.js

    import { INCREMENT, DECREMENT } from './action';

    const initialState = {
        contador: 0,
        users: [],
    };

    const reducer = (state = initialState, action) => {
        switch(action.type){
            case INCREMENT:
                return {
                    ...state,
                    contador: state.contador + 1,
                };
            case DECREMENT:
                return {
                    ...state,
                     contador: state.contador - 1,
                 };
            case GET_USERS:
                return {
                    ...state,
                    users: action.payload,
                }
            default:
                return { ...state }
        }
    }

    export default reducer;

//store.js

    import { createStore, applyMiddleware, compose } from 'redux';
    import reducer from './reduxer';
    import thunkMiddleware from "redux-thunk";

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducer,
        composeEnhancer(applyMiddleware(thunkMiddleware))
    );

    export default store;

    // El store ahora tiene 2 cosas que han cambiado:
    // 1. Podemos usar el Redux Devtools Extension.
    // 2. Podra hacer llamados a la API a usar como ejemplo.

//////////////////////////

// index.js (La etiqueta provider que tiene que abrazar a APP)

    import { Provider } from 'react-redux';
    import store from './store' // donde se encuentre store.

    <Provider store={store}>
        <App/>
    </Provider>

                            
