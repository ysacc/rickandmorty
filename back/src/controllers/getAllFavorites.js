const { Favorite } = require('../DB_connection');

const getAllFavorites =  async() =>{
    try {
        const allFavorites = await Favorite.findAll();
        if(!allFavorites) throw new Error('No tienes favoritos seleccionados')
        
        return allFavorites;
    } 
    catch (error) {
        return { error: error.message}
    }

}

module.exports = {
    getAllFavorites
}
