import React from 'react'
import CardsContainer from '../components/cards/cards-container/CardsContainer.jsx'
import NewNote from '../components/cards/add-card/NewNote'
import Navbar from '../components/navbar/Navbar.jsx'
import AddNoteForm from './addNoteForm/AddNoteForm.jsx'


export const formRef = React.useRef()


function Home() {
    return (
        <div className="home">
            <AddNoteForm ref={formRef}/>
            <NewNote/>
            <CardsContainer/>
        </div>
    )
}

export default Home
