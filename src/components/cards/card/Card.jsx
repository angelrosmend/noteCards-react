import React, { useContext } from 'react'
import { NoteContext } from '../../../contexts/NoteContext'


function Card({note}) {
    const { dispatch } = useContext(NoteContext)
    return (
        <div className='card'>
            <h2 className="title">{note.title}</h2>
            <hr/>
            <div className="content">
                <p className="description">
                    {note.description}
                </p>
            </div>
        </div>
    )
}

export default Card
