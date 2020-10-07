const {Schema, model} = require('mongoose')

const noteSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    description: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = model('Note', noteSchema)