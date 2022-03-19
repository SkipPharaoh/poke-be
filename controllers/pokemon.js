// DEPENDENCIES //
const express = require('express')
const router = express.Router()

// ROUTES //
// router.get('/', (req, res) => {
//     res.send('🌊PokéDex App is live')
// })
router.get('/', (req,res) => {
    // res.send('🌊PokéDex App is live')
    res.status(200).json({
        body: "You found the PokéMon!"
    })
})

module.exports = router