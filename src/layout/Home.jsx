import React from 'react'
import CardsContainer from '../components/cards/cards-container/CardsContainer.jsx'
import NewNote from '../components/cards/add-card/NewNote'
import Navbar from '../components/navbar/Navbar.jsx'
import AddNoteForm from './addNoteForm/AddNoteForm.jsx'


function Home() {
    return (
        <div className="home">
            <AddNoteForm/>
            <NewNote/>
            <CardsContainer/>
        </div>
    )
}

export default Home
