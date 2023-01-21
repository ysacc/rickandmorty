import { ADD_FAVORITE,DELETE_FAVORITE } from "./action.type";
import axios from "axios";

export const addFavorite = (characters) =>{
    return {
        type: ADD_FAVORITE ,
        payload: characters
    }
};

export const deleteFavorite = (id) =>{
    return {
        type: DELETE_FAVORITE ,
        payload: id
    }
};
