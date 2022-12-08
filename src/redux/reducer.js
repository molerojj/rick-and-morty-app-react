import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions/types'

const initialState = {
    myFavorites: [],
    allCharacters: []
  }

  const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: 
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

            case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
             };

             case FILTER:
                const characters = [...state.allCharacters];
                const filterCharacters = action.payload === "ALL" ? characters : characters.filter(e => e.gender === action.payload)
                return {
                    ...state,
                    myFavorites: filterCharacters,
                    allCharacters: characters
                }

            case ORDER:
                const copyCharacter = [...state.allCharacters];
                if(action.payload === "Ascending") {
                    copyCharacter.sort((a, b) => a.id - b.id);
                } else {
                    copyCharacter.sort((a, b) => b.id - a.id);
                }
                return {
                    ...state,
                    myFavorites: copyCharacter
                };
                
            default:
                return { 
                    ...state,
                }
    }
}

export default rootReducer;