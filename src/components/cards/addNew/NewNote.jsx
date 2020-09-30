import React,{useContext, useState} from 'react';
import { NoteContext, noteContext } from '../../../contexts/NoteContext'


function NewNote() {
    const { dispatch } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        dispatch({type: 'ADD_NOTE', note: {
            title, description
        }});
        setTitle('')
        setDescription('')
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder="Title"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" 
                   placeholder="Enter note's description"
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">ADD NOTE</button>
        </form>
    )
}

export default NewNote
