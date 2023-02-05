import { ADD_FAVORITE,DELETE_FAVORITE,ORDER , FILTER} from "./action.type";
// import {GET_INITIAL_CHARS , GET_CHAR_DETAILS,  DELETE_CHAR, SEARCH_CHAR, SAVE_SEARCH_INPUT,
//     ADD_PAGE_CHAR, DECREASE_PAGE_CHAR, MOVE_PAGE_CHAR, FETCH_PAGE,
//     FILTER_FAVORITE_GENDER, FILTER_FAVORITE_ASCENDANT, FILTER_FAVORITE_DESCENDANT, RESTART_MATCHED_FAV, CHANGE_PROFILE, 
//     ADD_CREATED_CHAR, REMOVE_CREATED_CHAR, POST_CREATED_CHAR, FETCH_CREATED_CHAR, POST_USER } from "./action.type";
// import axios from "axios";


export const addFavorite = (character) =>{
    return {
        type: ADD_FAVORITE ,
        payload: character
    }
};

export const deleteFavorite = (id) =>{
    return {
        type: DELETE_FAVORITE ,
        payload: id
    }
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

// export const getInitialChars = ()=>{
//     return async function(dispatch){
//         try{
//             let response = await axios.get(`http://localhost:3001/api/detail`)
//             return dispatch({
//                     type: GET_INITIAL_CHARS,
//                     payload: response.data.results
//                 }
//             )
//         }
//         catch(err){
//             console.log(err);
//         }
//     }
// }
// export const getCharDetails = (id)=>{
//     return async function(dispatch){
//         try{
//             let response = await axios.get(`http://localhost:3001/api/detail/${id}`)
//             return dispatch({
//                     type: GET_CHAR_DETAILS,
//                     payload: response.data
//                 }
//             )
//         }
//         catch(err){
//             console.log(err.message);
//         }
//     }
// }
// export const searchChar = (input)=>{
//     return async function(dispatch){
//         try{
//             let response = await axios.get(`http://localhost:3001/api/detail/?name=${input}`)
//             return dispatch({
//                 type: SEARCH_CHAR,
//                 payload: response.data.results
//             }) 
//         }   
//         catch(err){
//             console.log(err);
//         }
//     }
// }

// export const saveSearchInput = (input)=>{
//     return {
//         type: SAVE_SEARCH_INPUT,
//         payload: input
//     }
// }

// export const fetchPage = (page)=>{
//     return async function(dispatch){
//         try{
//             let response = await axios.get(`http://localhost:3001/api/detail/?page=${page}`)
//             return dispatch({
//                     type: FETCH_PAGE,
//                     payload: response.data.results
//                 }
//             )
//         }
//         catch(err){
//             console.log(err.message);
//         }
//     }
// }

// export const addPageChar = ()=>{
//     return({type: ADD_PAGE_CHAR})
// }

// export const decreasePageChar = ()=>{
//     return({type: DECREASE_PAGE_CHAR})
// }

// export const movePageChar = (pageNum) => {
//     return {type: MOVE_PAGE_CHAR, payload: pageNum}
// }
// export const deleteChar = (id)=>{
//     return {
//         type: DELETE_CHAR, 
//         payload: id
//     }
// }
// export const filterFavoriteGender = (gender)=>{
//     return {
//         type: FILTER_FAVORITE_GENDER,
//         payload: gender
//     }
// }

// export const filterFavoriteAscendant = ()=>{
//     return {
//         type: FILTER_FAVORITE_ASCENDANT
//     }
// }

// export const filterFavoriteDescendant = ()=>{
//     return {
//         type: FILTER_FAVORITE_DESCENDANT
//     }
// }   

// export const restartMatchedFav = ()=>{ //for filters
//     return {
//         type: RESTART_MATCHED_FAV
//     }
// }

// export const changeProfile = (data)=>{
//     return{
//         type: CHANGE_PROFILE,
//         payload: data
//     }
// }

// export let fetchCreatedChar = ()=>{
//     return async function(dispatch){
//         try{
//             let response = await axios("http://localhost:3001/api/created_chars")
//             dispatch({
//                 type: FETCH_CREATED_CHAR,
//                 payload: response.data.results
//             })
//         }
//         catch(err){
//             console.log(err.message);
//         }
//     }
// }

// export let addCreatedChar = (data)=>{
//     return {
//         type: ADD_CREATED_CHAR,
//         payload: data
//     }
// }

// export let removeCreatedChar = (id)=>{
//     fetch(`http://localhost:3001/api/created_chars/${id}`, { method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }, 
//         mode: 'cors'
//     });
//     return {
//         type: REMOVE_CREATED_CHAR,
//         payload: id
//     }
// }

// export let postCreatedChar = (data)=>{
//     return async function(dispatch){
//         fetch("http://localhost:3001/api/created_chars", {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: { 'Content-Type': 'application/json' }, 
//             mode: 'cors'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 return dispatch({
//                     type: POST_CREATED_CHAR,
//                     payload: data
//                 })
//             })
//             .catch(err=>err)
//     }   
// }

// export let postUser = (data)=>{
//     return async function(dispatch){
//         fetch("http://localhost:3001/api/users", {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: { 'Content-Type': 'application/json' }, 
//             mode: 'cors'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log("sending the sign up from to the api...");
//                 return dispatch({
//                     type: POST_USER,
//                     payload: data
//                 })
//             })
//             .catch(err=>err)
//     }   
// }