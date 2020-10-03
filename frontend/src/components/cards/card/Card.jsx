import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ModalContext from '../../../contexts/ModalContext';
import { NoteContext } from '../../../contexts/NoteContext';
import './Card.css'

function Card({note}) {
    const { dispatch } = useContext(NoteContext)
      const {openFormHandler} = useContext(ModalContext)
    const remove = () => dispatch({type:'REMOVE_NOTE', id: note.id})
    return (
        <div className='card'>
            <h2   key={note.id}
                  onClick={openFormHandler} 
                  className="title">
            <Link className="link"
                    to={`/details/${note.id}`}>
                    {note.title}</Link>
            </h2>
            <span onClick={remove} className="delete">
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
