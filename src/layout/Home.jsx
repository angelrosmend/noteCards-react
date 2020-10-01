import React,{useContext, useRef} from 'react'
import CardsContainer from '../components/cards/cards-container/CardsContainer.jsx'
import NewNote from '../components/cards/add-card/NewNote'
import Navbar from '../components/navbar/Navbar.jsx'
import AddNote from './modal/Portal.jsx'
import ModalContext from '../contexts/ModalContext.js'
import NoteForm from './modal/portals/NewNote.jsx'


function Home() {
  const{formRef} = useContext(ModalContext)
    return (
        <div className="home">
            <AddNote ref={formRef}>
              <NoteForm/>
            </AddNote>
            <CardsContainer/>
        </div>
    )
}

export default Home
