import React, { useContext } from 'react'
import { NoteContext } from '../../../contexts/NoteContext';
import './Card.css'

function Card({note}) {
    const { dispatch } = useContext(NoteContext)
    return (
        <div className='card'>
            <h2 className="title">{note.title}</h2>
            <span onClick={() => dispatch({type:'REMOVE_NOTE', id: note.id})} className="delete">
            <i 
            className="fas fa-trash-alt"
            >
                </i></span>
            <div className="content">
                <p className="description">
                    {note.description}
                </p>
            </div>
        </div>
    )
}

export default Card
