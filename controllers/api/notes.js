const Note = require('../../models/note')

module.exports = {
  index,
  create,
  show,
};

async function index(req, res) {
    const notes = await Note.find({})
    // const notes = [{text: 'dfghjhgfds'}]
    res.json(notes)
}

async function create(req, res) {
  req.body.user = req.user
  console.log(req.body)
  const newNote = new Note()
  const note = await newNote.addNote(req.body)
  res.json(note)
}

async function show(req, res) {
  const note = await Note.findById(req.params.id);
  res.json(note);
}
