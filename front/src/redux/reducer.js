import {ADD_FAVORITE,DELETE_FAVORITE,FILTER,ORDER,} from "./action.type"
// import {GET_INITIAL_CHARS, GET_CHAR_DETAILS,  DELETE_CHAR, SEARCH_CHAR, SAVE_SEARCH_INPUT, ADD_CREATED_CHAR, REMOVE_CREATED_CHAR, FETCH_CREATED_CHAR, 
//     ADD_PAGE_CHAR, DECREASE_PAGE_CHAR, MOVE_PAGE_CHAR, FETCH_PAGE,
//     FILTER_FAVORITE_GENDER, FILTER_FAVORITE_ASCENDANT, FILTER_FAVORITE_DESCENDANT, RESTART_MATCHED_FAV, CHANGE_PROFILE,  
// } from "./action.type"
const initialState = {
    myFavorites :[],
    allCharacters : [],
    // matched_characters: [],
    // initialCharacters: [],
    // searchInput: "",
    // charDetails: {}, 
    // createdChars: [],
    // page: 1,
    // matchedFavorites: [],
    // initialFavorites: [],
    // createdChar: [],
    // profile: {age: 33, country: "Peru", image: "data:image/jpeg;base64,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"}
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
            // case GET_INITIAL_CHARS: return {
            //     ...state,
            //     matched_characters: payload,
            //     initialCharacters: payload
            // }
    
            // case GET_CHAR_DETAILS: return {
            //     ...state,
            //     charDetails: payload
            // }
    
            // case DELETE_CHAR: 
            //     return {
            //         ...state, 
            //         matched_characters: state.matched_characters.filter(el=>el.id!==payload)
            //         /* hacer delete favorite tambien */
            //     }
    
            // case SEARCH_CHAR: return{
            //     ...state,
            //     matched_characters: payload ? payload : [],
            //     page: 1
            // }
    
            // case SAVE_SEARCH_INPUT: return {
            //     ...state,
            //     searchInput: payload
            // }
    
            // case FETCH_PAGE: return{
            //     ...state, 
            //     matched_characters: payload
            // }
    
            // case ADD_PAGE_CHAR: return{
            //     ...state,
            //     page: state.page<41 ? state.page+1 : state.page
            // }
    
            // case DECREASE_PAGE_CHAR: return{
            //     ...state,
            //     page: state.page>1 ? state.page-1 : state.page
            // }
    
            // case MOVE_PAGE_CHAR: return{
            //     ...state,
            //     page: payload
            // }
            // case FILTER_FAVORITE_GENDER: return {
            //     ...state,
            //     matchedFavorites: state.matchedFavorites.filter(fav=>fav?.gender.toLowerCase()===payload)
            // }
    
            // case FILTER_FAVORITE_ASCENDANT: return {
            //     ...state,
            //     matchedFavorites: state.matchedFavorites.sort((a,b)=>a.name.localeCompare(b.name))
            // }
    
            // case FILTER_FAVORITE_DESCENDANT: return {
            //     ...state,
            //     matchedFavorites: state.matchedFavorites.sort((a,b)=>b.name.localeCompare(a.name))
            // }
    
            // case RESTART_MATCHED_FAV: return{ //for filters
            //     ...state, 
            //     matchedFavorites: state.initialFavorites
            // }
    
            // case CHANGE_PROFILE: return {
            //     ...state,
            //     profile: {...state.profile, ...payload}
            // }
    
            // case FETCH_CREATED_CHAR: return {
            //     ...state, 
            //     createdChar: payload
            // }
    
            // case ADD_CREATED_CHAR: return {
            //     ...state,
            //     createdChar: [...state.createdChar, payload]
            // }
    
            // case REMOVE_CREATED_CHAR: return {
            //     ...state,
            //     createdChar: state.createdChar.filter(el=>el.id!==payload)
            // }
    
            default: return {
                ...state
            }
    }
}

export default rootReducer;