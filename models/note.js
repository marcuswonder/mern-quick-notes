const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {
        type: String, 
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
    }
)


noteSchema.methods.addNote = async function (newNote) {
    console.log(newNote)
    const note = this
    note.text = newNote.note
    note.user = newNote.user
    return note.save()
}

module.exports = mongoose.model('Note', noteSchema);