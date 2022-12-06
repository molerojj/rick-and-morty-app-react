import { ADD_FAVORITE, DELETE_FAVORITE } from './types'

export const addFavorite = (favorite) => {
    return { 
        type: ADD_FAVORITE,
        payload: favorite
    }
};

export const deleteFavorite = (id) => {
    return { 
        type: DELETE_FAVORITE,
        payload: id
    }
};