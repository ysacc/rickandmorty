export const addFavorite = (personaje) =>{
    return {
        type: ADD_FAVORITE ,
        payload: personaje
    }
};

export const deleteFavorite = (id) =>{
    return {
        type: DELETE_FAVORITE ,
        payload: id
    }
};