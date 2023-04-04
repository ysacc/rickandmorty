import { ADD_FAVORITE,DELETE_FAVORITE,ORDER , FILTER} from "./action.type";
import axios from "axios";


export const addFavorite = (character) =>{
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/rickandmorty/fav", character)
        const data = response.data;
        return dispatch({
            type: ADD_FAVORITE ,
            payload: data
        })
    }

    // return {
    //     type: ADD_FAVORITE ,
    //     payload: character
    // }
};

export const deleteFavorite = (id) =>{
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/rickandmorty/fav/${id}`)
        const data = response.data;
        return dispatch({
            type: DELETE_FAVORITE ,
            payload: data
        })
    }
    // return {
    //     type: DELETE_FAVORITE ,
    //     payload: id
    // }
};

export const filterCards = (status) =>{
    
    return{
        type:FILTER,
        payload: status
    }
}

export const orderCards = (id) =>{
    return{
        type:ORDER,
        payload: id
    }
}