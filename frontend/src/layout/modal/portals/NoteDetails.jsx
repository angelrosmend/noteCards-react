import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../../../contexts/NoteContext'

function NoteDetails({match}) {

   const id = match.params.id
   const [note, setNote ]= useState({})



    return (
        <div className="details-wrapper">
            <span className="edit">
              <i className="fas fa-edit"></i>
            </span>
            <h2>Title</h2>
            <p>Description</p>
        </div>
    )
}

export default NoteDetails
