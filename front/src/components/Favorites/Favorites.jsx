import React from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions";
import  Card  from "../Card/Card"
import styles from "../Favorites/favorites.module.css"

export  function Favorites(){

    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return(
        <div>
            <h2 className={styles.title}>My Favorites</h2>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option selected="true" disabled="disabled">Order By</option>
                    <option value="All">All</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onChange={handleFilter}>
                    <option selected="true" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            
            <div className={styles.favorites}>
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


