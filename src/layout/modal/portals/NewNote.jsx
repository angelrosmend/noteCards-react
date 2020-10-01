import React,{useContext, useState} from 'react'
import ModalContext from '../../../contexts/ModalContext.js'
import {NoteContext} from '../../../contexts/NoteContext.js'

function NewNote() {
    const {closeFormHandler} = useContext(ModalContext)
    const { dispatch } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        dispatch({type: 'ADD_NOTE', note: {
            title, description
        }});
        setTitle('')
        setDescription('')
        closeFormHandler()
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
        <input className="input-title"
               type="text" 
               placeholder="Title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>
        <textarea type="text" 
               name="description"
               maxLength="500"
               placeholder="Enter note's description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}/>
        <button className="submit-form" type="submit">ADD NOTE</button>
    </form>
    )
}

export default NewNote
