// DEPENDENCIES //
const express = require('express')
const router = express.Router()

// ROUTES //

// Home
router.get('/', (req,res) => {
    // res.send('🌊PokéDex App is live')
    res.status(200).json({
        body: "You found the PokéMon!"
    })
})

// Create
router.post('/api/register', (req,res) => {
    // res.send('🌊PokéDex App is live')
    console.log(req.body)
    res.json({
        status: "Ok"
    })
})

module.exports = router