import React,{useContext, useState} from 'react'
import ModalContext from '../../../contexts/ModalContext.js'
import {NoteContext} from '../../../contexts/NoteContext.js'
import axios from 'axios'

function NewNote() {
    const {closeFormHandler} = useContext(ModalContext)
    const { dispatch } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        const note = {title, description}
        e.preventDefault()
        dispatch({type: 'ADD_NOTE', note});
        const res = await axios.post('http://localhost:4000/api/notes', note)
        console.log(res)
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <input required
               className="input-title"
               type="text"
               name="title" 
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
