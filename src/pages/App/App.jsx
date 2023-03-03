import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import * as notesAPI from '../../utilities/notes-api'
import AuthPage from '../AuthPage/AuthPage'
import NewNotePage from '../NewNotePage/NewNotePage'
import NotesList from '../../components/NotesList/NotesList'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  console.log("App loading")
  const [ user, setUser ] = useState(getUser())
  // const [ notes, setNotes ] = useState(getAll())
  const [ notes, setNotes ] = useState([])


  useEffect(function() {
    async function getNotes() {
        const notes = await notesAPI.getAll()
        setNotes(notes)
    }
    getNotes()
  },[])

  function setNoteState(newNote) {
    setNotes(notes => [...App, newNote])
}

  console.log(notes)

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            
            <Route path="/notes" element={<NotesList notes={notes} />} />
            <Route path="/notes/new" element={<NewNotePage setNotes={setNotes} setNoteState={setNoteState} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}