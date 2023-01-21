import React from "react"
import { Card } from "../Card/Card"

export default function Favorites(myFavorites,mapStateToProps){
    function mapStateToProps(myFavorites){
            return {
            ...myFavorites,
        }
        }
    return(
        <div>
            
            <h1>ACA VAN LOS FAVORITOS</h1>
            
            {/* {
            myFavorites.map(({id,name,species,gender,image,}) => {
            return <myFavorites
                id ={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                key={id}
                />
                })
            } */}
        </div>

    )
}