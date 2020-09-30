import React,{useRef} from 'react'
import './ButtonAdd.css'
import { formRef } from '../../../layout/Home'



function ButtonAdd() {

 const openFormHandler = () => {
  formRef.current.openForm()
 }

 return (
  <span onClick={openFormHandler} className="add"><i className="fas fa-plus"></i></span>
 )
}

export default ButtonAdd
