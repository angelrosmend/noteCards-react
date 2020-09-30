import React from 'react'
import './Navbar.css'
import ButtonAdd from './add/ButtonAdd'




function Navbar() {
 return (
  <nav>
   <div className='logo'>
     <h1>Add card note</h1>
     <ButtonAdd/>
   </div>
   <div className='search'> 
   <input type="search" placeholder='search'/>
   <i className="fas fa-search"></i>
   </div>
   <ul className='links'>
    <li>Login</li>
    <li>Singup</li>
   </ul>
  </nav>
 )
}

export default Navbar
