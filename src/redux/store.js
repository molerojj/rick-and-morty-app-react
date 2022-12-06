import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer'

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//     const store = createStore(
//         reducer,
//         composeEnhancer(applyMiddleware(thunkMiddleware))
//     );

export default store;
