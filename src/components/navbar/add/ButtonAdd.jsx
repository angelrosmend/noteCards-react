import React,{useRef} from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ModalContext from '../../../contexts/ModalContext'
import './ButtonAdd.css'


function ButtonAdd() {
   const{openFormHandler} = useContext(ModalContext)
 return (
  <span onClick={openFormHandler} className="add">
    <Link to="/add"
          className="link">
     <i className="fas fa-plus"></i>
    </Link>
    </span>
 )
}

export default ButtonAdd
