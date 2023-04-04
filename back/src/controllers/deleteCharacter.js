const { Favorite } = require('../DB_connection');

const deleteCharacter = async(id) => {
    try {
        const favoriteDelete = await Favorite.findByPk(id);
        if(!favoriteDelete) throw new Error("No exite el personaje a eliminar")
        
        favoriteDelete.destroy();
        return "Favorito eliminado correctamente"
    } 
    catch (error) {
        return { error: error.message}
    }

}
module.exports = {
    deleteCharacter

}

