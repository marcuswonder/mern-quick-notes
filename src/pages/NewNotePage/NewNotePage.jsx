import './NewNotePage.css';
import { useState } from "react";
import * as notesAPI from '../../utilities/notes-api'

export default function NewNotePage( setNotes, setNoteState ) {
    const [ newNote, setNewNote ] = useState("")

    async function handleAddNote(evt) {
        evt.preventDefault()
        await notesAPI.addNote(newNote)
        setNewNote("")
        // setNotes(newNote)
        // setNoteState(newNote)
      }

    return (
        <>
            <h1>New Note</h1>
            <form onSubmit={handleAddNote}>
                <div className="input">
                    <input
                        placeholder="New Note"
                        value={newNote}
                        onChange={(evt) => setNewNote(evt.target.value)}
                        required
                    />
                </div>  
                <button type="submit" className="button">Add Note</button>
                
            </form>
        </>
    )
}