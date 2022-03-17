const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://127.0.0.1:27017/pokemonDB'

mongoose.connect(MONGO_URI, () => {
    console.log('Connected to MongoDB - PokemonDB')
})

mongoose.connection.on('error', err => {
    console.log(err.message,  'is MongoDB running?')
})