// DEPENDENCIES //
const express = require('express')


const app = express()

// APP CONFIG //
const PORT = 9000

// MIDDLEWARE //
app.use(express.urlencoded({extended: false}))

// ROUTES //
app.get('/', (req,res) => {
    res.send('🌊PokéDex App is live')
})

// START SERVER
app.listen(PORT, () => {
    console.log(`Who's that PokeMon on ${PORT}!!`)
})