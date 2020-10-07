import React from 'react'


function NoteDetails({match}) {



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
