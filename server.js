// DEPENDENCIES //
const express = require('express')
const app = express()
const cors = require('cors')
require('./db')



// APP CONFIG //
const PORT = 9000
const acceptList = ["http://localhost:3000"]
const options = {
    origin: function(origin, callback){
        if (acceptList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback( new Error("Not allowed by CORS"))
        }
    }
}

// MIDDLEWARE //
app.use(express.urlencoded({extended: false}))
app.use(cors(options))

// ROUTES //
app.get('/', (req,res) => {
    // res.send('🌊PokéDex App is live')
    res.status(200).json({
        body: "You found the PokéMon!"
    })
})

// START SERVER
app.listen(PORT, () => {
    console.log(`Who's that PokéMon on ${PORT}!!`)
})