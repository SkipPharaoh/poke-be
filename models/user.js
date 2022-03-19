const mongoose = require('mongoode');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: String
}, {
    timestamps: true
})

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    }
})

module.exports = mongoose.model('User', userSchema);