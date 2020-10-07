import React from 'react';
import Home from './layout/Home';
import NoteContextProvider from './contexts/NoteContext'
import { ModalContextProvider } from './contexts/ModalContext';
import{BrowserRouter, Route} from 'react-router-dom'
 
function App() {
  return (
    <BrowserRouter>
    <ModalContextProvider>
        <NoteContextProvider>
            <Route path="/" component={Home}/>
        </NoteContextProvider>
    </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;
