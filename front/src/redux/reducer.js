import {ADD_FAVORITE,DELETE_FAVORITE,FILTER,ORDER,} from "./action.type"

const initialState = {
    myFavorites :[],
    allCharacters : [],
}
const rootReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ADD_FAVORITE: return {
            ...state,
            myFavorites:[...state.myFavorites,payload],
            allCharacters:[...state.allCharacters,payload]
        }
        case FILTER:
            const staChar = [...state.allCharacters]
            const filtered2 = staChar.filter(
                character => character.gender === payload
            )
            return {
                ...state,
                myFavorites:filtered2
            }
        case ORDER:
            const staCharO = [...state.allCharacters]
            const order = staCharO.sort()
            return{
                ...state,
                myFavorites:order
            }
        case DELETE_FAVORITE:
            const filtered = state.myFavorites.filter(
                fav => fav.id !== payload
            )
            return{
                ...state,
                myFavorites:filtered
            }
            default: return {
                ...state
            }
    }
}

export default rootReducer;