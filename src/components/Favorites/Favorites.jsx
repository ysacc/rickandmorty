

export default function Favorites(myFavorites){
    function mapStateToProps(){
        return{
            ...myFavorites,
        }
    }
    return(
        <div>
            {
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
            }
        </div>

    )
}