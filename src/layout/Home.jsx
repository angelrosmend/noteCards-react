import React from 'react'
import CardsContainer from '../components/CardsContainer'
import NewNote from '../components/NewNote'


function Home() {
    return (
        <div className="home">
            <NewNote/>
            <CardsContainer/>

        </div>
    )
}

export default Home
