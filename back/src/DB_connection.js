require('dotenv').config();
const { Sequelize } = require('sequelize');
const  modelCharacter = require("./models/Character")
const modelFavorite =require("./models/Favorite")
const { DB_USER, DB_PASSWORD, DB_HOST ,DB_NAME} = process.env;

/*
Creacion de la conexion URL
*/
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/


modelCharacter(sequelize);
modelFavorite(sequelize);




module.exports = {
   ...sequelize.models,
   sequelize,
};
