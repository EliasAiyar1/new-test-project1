const noblox = require('noblox.js')
const dotenv = require('dotenv').config()
var http = require('http')

const cookie = process.env.COOKIE

gamertag = ""

async function Thumb() {
    await noblox.getPlayerThumbnail(461283819, 420, "png", false, "Headshot")
    
    console.log("Payout have been made successfully!")
}



noblox.setCookie(cookie).then(function() { 
    console.log("Logged in successfully!")

    Payout()
}).catch(function(err){
    console.log(`Error loggin in, full error: ${err}`)
})