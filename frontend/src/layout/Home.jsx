import React from 'react'
import CardsContainer from '../components/cards/cards-container/CardsContainer.jsx'
import Navbar from '../components/navbar/Navbar.jsx'
import Portal from './modal/Portal.jsx'
import NewNote from './modal/portals/NewNote.jsx'
import {Route} from 'react-router-dom'
import NoteDetails from './modal/portals/NoteDetails.jsx'


function Home() {
    return (
        <div className="home">
            <Navbar/>
            <CardsContainer/>
            <Portal>
                <Route path="/add" component={NewNote}/>
                <Route path="/details/:id" component={NoteDetails}></Route>
            </Portal>
        </div>
    )
}

export default Home
