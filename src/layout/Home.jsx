import React,{useContext, useRef} from 'react'
import CardsContainer from '../components/cards/cards-container/CardsContainer.jsx'
import NewNote from '../components/cards/add-card/NewNote'
import Navbar from '../components/navbar/Navbar.jsx'
import AddNote from './addNoteForm/AddNote.jsx'
import ModalContext from '../contexts/ModalContext.js'


function Home() {
  const{formRef} = useContext(ModalContext)
    return (
        <div className="home">
            <AddNote ref={formRef}/>
            <CardsContainer/>
        </div>
    )
}

export default Home
