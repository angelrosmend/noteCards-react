const {Schema, model} = require('mongoose')

const noteSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = model('Note', noteSchema)