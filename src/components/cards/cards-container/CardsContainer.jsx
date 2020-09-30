import React, {useContext} from 'react';
import { NoteContext } from '../../../contexts/NoteContext';
import Card from '../card/Card.jsx'
import './CardsContainer.css'

function CardsContainer(){
    const { notes } = useContext(NoteContext)

    return(
        <div className="cards-container">
            {notes.length ? (
        
                    <ul className="cards-list">
                        {notes.map(note => {
                            return (<Card note={note} key={note.id}/>)
                        })}
                    </ul>
            ):(
                <div className="empty">
                    <h1>Add a note!</h1>
                </div>
            )}

        </div>
    )
}



export default CardsContainer
