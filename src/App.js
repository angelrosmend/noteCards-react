import React from 'react';
import Home from './layout/Home';
import NoteContextProvider from './contexts/NoteContext'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <NoteContextProvider>
      <div className="App"> 
        <Navbar/>    
        <Home/>  
      </div>
    </NoteContextProvider>
  );
}

export default App;
