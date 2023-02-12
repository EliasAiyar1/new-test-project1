const noblox = require('noblox.js');
const dotenv = require('dotenv').config();
var http = require('http');
var fs = require('fs')

const cookie = process.env.COOKIE

async function Thumb() {
    avatar = await noblox.getPlayerThumbnail(461283819, 420, "png", false, "Headshot")
    
    return console.log(avatar[0]["imageUrl"])
}

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(Thumb());
    response.end();
}

http.createServer(onRequest).listen(8000)


noblox.setCookie(cookie).then(function() { 
    console.log("Logged in successfully!")

    Thumb()
}).catch(function(err){
    console.log(`Error loggin in, full error: ${err}`)
})