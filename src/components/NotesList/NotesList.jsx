import NewNotePage from '../../pages/NewNotePage/NewNotePage';
import './NotesList.css';


export default function NotesList({ notes }) {    
    const allNotes = notes?.map((note) => {
        return (
        <div className="note-card-container">
            <div className="note-card">
                <p>{note.text}</p>
                <p>{note.createdAt.toLocaleString("sv-SE")}</p>
            </div>
        </div>
        )
    })
    console.log(allNotes)
        
    return (      
        <div>
            <NewNotePage />
            <h1>Note List</h1>
            {allNotes.length ? allNotes : <p>No Notes Yet!</p>}
        </div>
    )
    }
