const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: { type: String, required: true},
    body: {type: String, default: "I wanna be the very best!"}
}, {
    timestamps: true
})


module.exports = mongoose.model('Post', postSchema);