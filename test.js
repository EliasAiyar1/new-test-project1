const noblox = require('noblox.js')
const dotenv = require('dotenv').config()

const cookie = process.env.COOKIE

async function Thumb() {
    avatar = await noblox.getPlayerThumbnail(461283819, 420, "png", false, "Headshot")
    
    return avatar[0]["imageUrl"]
}

noblox.setCookie(cookie).then(function() { 
    console.log("Logged in successfully!")

    Thumb()
}).catch(function(err){
    console.log(`Error loggin in, full error: ${err}`)
})

var http = require('http');
var fs = require('fs')

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404)
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000)















const http = require('http')
const port = 3000

const server = http.createServer(async function(req, res) {
    image = res.write(await Thumb())
    
    res.end()
    
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})