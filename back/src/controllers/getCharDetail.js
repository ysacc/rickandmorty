const axios = require('axios');

const getCharDetail = async function (req, res) {
    try {
        const { detailId } = req.params;
        const response = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const data = response.data
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender,
            status: data.status,
            origin: data.origin
        }
        res.status(200).json(character)
    } 
    catch (error) {
        res.status(400).send('Algo salió mal')
    }

}
module.exports = {
    getCharDetail
}