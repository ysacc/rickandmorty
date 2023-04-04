const express = require('express');
const { getAllChars } = require('../controllers/getAllChars');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const postFav = require('../controllers/postFav');
const { getAllFavorites } = require('../controllers/getAllFavorites');
const { getCharDetail } = require('../controllers/getCharDetail');



//mostrar las cards x id
router.get('/onsearch/:id', getCharById);

//mostrar los detalles x id
router.get('/detail/:detailId', getCharDetail);

//agregar a fav
router.post("/fav", async (req, res)=>{
    try {
        const characterFav = await postFav(req.body);
        if(characterFav.error) throw new Error(characterFav.error)

        return res.status(200).json(characterFav);
    } 
    catch (error) {
        return res.status(400).json({ error: error.masage })
    }
});


//mostrar fav
router.get('/fav', async (req, res) => {
    try {
        const allFavorites = await getAllFavorites();
        if(allFavorites.error) throw new Error(allFavorites.error);
        return res.status(200).json(allFavorites);
    } 
    catch (error) {
        return res.status(404).json({error:error.message});
    }
})

//eliminar fav
router.delete('/fav/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteFav = await deleteCharacter(parseInt(id));
        if(deleteFav.error) throw new Error(deleteFav.error);

        return res.status(200).json(deleteFav);
    } catch (error) {
        return res.status(404).json({ error: error.message});
    }
})

//trae todos los char de la DB
router.get('/allCharacters', async(req, res)=> {
    try {
        const allCharacters = await getAllChars();
        //console.log(allCharacters);
        res.status(200).json(allCharacters);
    } 
    catch (error) {
        res.status(404).json({error: error.message})
    }
})

module.exports = router;