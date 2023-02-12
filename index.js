const noblox = require('noblox.js')
const dotenv = require('dotenv').config()

const cookie = process.env.COOKIE

async function Thumb() {
    avatar = await noblox.getPlayerThumbnail(461283819, 420, "png", false, "Headshot")
    
    console.log(avatar[0]["imageUrl"])
}

noblox.setCookie(cookie).then(function() { 
    console.log("Logged in successfully!")

    Thumb()
}).catch(function(err){
    console.log(`Error loggin in, full error: ${err}`)
})