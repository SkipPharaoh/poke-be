const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/pokemon')


// ROUTES //

// Home
router.get('/', (req,res) => {
    // res.send('🌊PokéDex App is live')
    res.status(200).json({
        body: "You found the PokéMon!"
    })
})

// Create
router.post('/signup', usersCtrl.signup)

module.exports = router