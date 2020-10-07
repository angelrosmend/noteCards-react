const notesCtrl = {}

const Note = require('../models/Note.model');

notesCtrl.getNotes = async (req, res) => {
    const notesDB = await Note.find();
    res.json(notesDB)
}

notesCtrl.createNote = async (req, res) => {
    const { title, description, date, author} = req.body;
    const newNote = new Note({
        title,
        description,
        date,
        author,
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
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title, description})
    res.json({message: 'Note updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'note deleted'})
}


module.exports = notesCtrl;