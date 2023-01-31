const http = require("http");
const { url } = require("inspector");
const {sendCharacters,sendLocations,sendNotFound,sendHouse} = require("../controllers/controllers");

const PORT=3001;
http.createServer((req,res)=>{
    // res.writeHead(200, { 'Content-Type':'text/plain' })
	// res.end('Hola, Mundo!\n');
    const url = req;
    // const parsedUrl = url.parse(req.url, true)
    switch (url){
        case "/html":
            sendHouse(res);
            break;
        case "/characters":
            sendCharacters(res);
            break;
        default:
            sendNotFound(res);
            break;
    }
}
).listen(PORT,"localhost");

    // switch (url){
    //     case "/characters":
    //         req.url.split(id);
    //         res.writeHead(200,{"Content-Type":"text/plain"});
    //         res.end(JSON.stringify(data));
    //         break;
    //     default:
    //         res.writeHead(404,{"Content-type": "text/plain"});
    //         res.end("aca no hay nada");
    //         break;
    // }
    // if(url.containt("rickandmorty/character"req.url.split(id) === response.data.character }
    // response.writeHead(200,{"Content-Type":"text/plain"});
    // response.end(JSON)
    // else{
    //     response.writeHead(404,{"Content-type": "text/plain"})
    //     response.end("aca no hay nada")}
