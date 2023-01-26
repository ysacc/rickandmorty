import { useDispatch } from "react-redux";
import React from "react"
import { filterCards, orderCards } from "../../redux/actions";
import { Card } from "../Card/Card"

export default function Filter(props){
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
            </div>
        )
}