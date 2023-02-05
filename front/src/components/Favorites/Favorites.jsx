import React from "react"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions";
import  Card  from "../Card/Card"

export  function Favorites({myFavorites}){

    const dispatch = useDispatch();
    const handleClick = (event) => {
        const {name,value} = event.target
        switch(name){
            case "order":
                return dispatch(orderCards(value))
            case "filter":
                return dispatch(filterCards(value))
            default: return 0
        }
    }
    return(
        <div>
            <div>
                <select name="order" onClick={handleClick} id="">
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendiente</option>
                </select>
                <select name="filter" onClick={handleClick}  id="">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <h2>My Favorites</h2>
            <div >
            {myFavorites?.map((character) => {
                    return(<Card
                        id ={character.id}
                        name={character.name}
                        species={character.species}
                        gender={character.gender}
                        image={character.image}
                        key={character.index}
                    />)
                    }) }
        </div>
        </div>
    )
}
export function mapStateToProps(state){
    return {
    myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps,null)(Favorites)


