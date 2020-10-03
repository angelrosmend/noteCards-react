const notesCtrl = {}

const Note = require('../models/Note.model');

notesCtrl.getNotes = async (req, res) => {
    const notesDB = await Note.find();
    res.json(notesDB)
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save()
    console.log(newNote)
    res.json({message: 'note saved'})
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

notesCtrl.updateNote = async (req, res) => {
    const {title, content, author} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title, content, author})
    res.json({message: 'Note updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'note deleted'})
}


module.exports = notesCtrl;