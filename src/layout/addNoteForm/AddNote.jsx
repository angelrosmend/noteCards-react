import React,{useState, forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'
import './AddNoteForm.css'
import NoteForm from './NoteForm';

const AddNote = forwardRef((props, ref) => {
  
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openForm: () => open(),
      closeForm: () => close()
    }
  })

  const open = () => {
  setDisplay(true)
  } 

 const close = () => {
  setDisplay(false)
 }

 if(display){
  return ReactDOM.createPortal(
   <div className="form-wrapper">
    <div className="form-backdrop">
     <div className="form-box">
     <span onClick={close} className="delete">
        <i className="fas fa-trash-alt"></i>
      </span>
       <NoteForm props={close}/>
     </div>
    </div>
   </div>
   , document.getElementById('card-form')
 )
 }

 return null
}
) 
 

export default AddNote
