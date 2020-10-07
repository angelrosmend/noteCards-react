import React, {useContext} from 'react';
import { NoteContext } from '../../../contexts/NoteContext';
import Card from '../card/Card.jsx'
import './CardsContainer.css'

function CardsContainer(){
    const { state } = useContext(NoteContext)
    const { notes, loading, error} = state
    console.log(notes)


    if(loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
      }else if(error) return <div className="error"><h1>{error}</h1></div>
    
      return(
        <div className="cards-container">
            <ul className="cards-list">
                {notes.map(note => {
                    return (<Card note={note} key={note._id}/>)
                })}
            </ul>
        </div>
)
}




export default CardsContainer
