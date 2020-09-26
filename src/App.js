import React from 'react';
import Home from './layout/Home';
import NoteContextProvider from './contexts/NoteContext'

function App() {
  return (
    <NoteContextProvider>
      <div className="App">     
        <Home/>  
      </div>
    </NoteContextProvider>
  );
}

export default App;
