import React,{useRef} from 'react';
import Home from './layout/Home';
import NoteContextProvider from './contexts/NoteContext'
import Navbar from './components/navbar/Navbar';
import { ModalContextProvider } from './contexts/ModalContext';


 
function App() {
  return (
    <ModalContextProvider>
    <NoteContextProvider>
      <div className="App"> 
        <Navbar/>    
        <Home/>  
      </div>
    </NoteContextProvider>
    </ModalContextProvider>
  );
}

export default App;
