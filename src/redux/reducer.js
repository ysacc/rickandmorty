import {ADD_FAVORITE,DELETE_FAVORITE} from "./action.type"

const initialState = {
    myfavorites :[]
}
const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myfavorites:[...state.list,action.payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myfavorites:state.list.filter((characters) => characters.id !== action.payload)
            }
        default:
            return {...state}
    }
}

export default rootReducer;