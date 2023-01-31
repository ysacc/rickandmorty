var fs= require("fs");

const sendCharacters = (res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(data));
}
const sendLocations = (res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(locations));
}
const sendNotFound = (res)=>{
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end();
}
const sendHouse = (res)=>{
    res.writeHead(200, { 'Content-Type':'text/html' })
	var html = fs.readFileSync(__dirname +'/html/index.html');
	res.end(html);
}

module.exports = {
    sendCharacters,
    sendLocations,
    sendNotFound,
    sendHouse,
}