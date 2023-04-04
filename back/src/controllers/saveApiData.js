const { default: axios } = require("axios");
const {Character} = require("../models/Character")
const URL = "https://rickandmortyapi.com/api/character";

const getApiData = async (url, character = []) => {
    try {
        if(character.length === 100) return character;
        const { info, results } = (await axios(url)).data;
        results.forEach(char => {
            if(character.length < 100) character.push({
                id: char.id,
                name: char.name, 
                species: char.species,
                status: char.status,
                origin: char.origin.name,
                gender: char.gender,
                image: char.image
            })
        });
        return getApiData(info.next, character);
    } 
    catch (error) {
        return {error: error.massage}
    }
}

const saveApiData = async () => {
    try {
        const characterAll = await getApiData(URL);
        //console.log("soy saveApiData", characterAll);
        await Character.bulkCreate(characterAll)
    
        return characterAll;
        
    } 
    catch (error) {
        return { error: error.message}
    }
}



module.exports	 = {
    getApiData,
    saveApiData
};


