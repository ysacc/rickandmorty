const { saveApiData } = require('./src/controllers/saveApiData');
const {sequelize} = require("../back/src/DB_connection")
const app = require('./src/routes/app')

sequelize.sync({force: true}).then( async () =>{
    console.log('DB conectada');
    // console.log(await saveApiData());
    await saveApiData();
    app.listen(3001, () => {
        console.log("Server on port 3001");
    })
}).catch((error)=> {
    console.log(error);
})


