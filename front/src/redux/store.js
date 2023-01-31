import { createStore,applyMiddleware, compose} from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
// import thunk from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// esta linea sirve para conecarnos con la extension del navegador =>REDUX DEVTOOLS

const store=createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    // esta Linea sirve para poder hacer peticiones a la API

    );

export default store;