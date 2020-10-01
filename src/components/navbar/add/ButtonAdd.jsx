import React,{useRef} from 'react'
import { useContext } from 'react'
import ModalContext from '../../../contexts/ModalContext'
import './ButtonAdd.css'


function ButtonAdd() {
   const{openFormHandler} = useContext(ModalContext)
 return (
  <span onClick={openFormHandler} className="add"><i className="fas fa-plus"></i></span>
 )
}

export default ButtonAdd
