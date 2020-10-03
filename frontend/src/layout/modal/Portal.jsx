import React,{forwardRef} from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom'
import ModalContext from '../../contexts/ModalContext';
import './portals.css'

const Portal = forwardRef((props) => {

 const {display, closeFormHandler} = useContext(ModalContext)

 if(display){
  return ReactDOM.createPortal(
   <div className="form-wrapper">
    <div className="form-backdrop">
     <div className="form-box">
     <span onClick={closeFormHandler} 
           className="delete">
        <i className="fas fa-times"></i>
      </span>
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
 

export default Portal
