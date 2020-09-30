import React,{useState, forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'

const AddNoteForm = forwardRef((props, ref) => {
  
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
    <div onClick={close} className="form-backdrop">
     <div className="form-box">
      {props.children}
     </div>
    </div>
   </div>
   , document.getElementById('card-form')
 )
 }

 return null
}
) 
 

export default AddNoteForm
