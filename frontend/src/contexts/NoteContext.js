import React, { createContext, useReducer, useEffect} from 'react';
import {initialState, noteReducer} from '../reducers/noteReducer'
import axios from 'axios'
export const NoteContext = createContext();
 


const NoteContextProvider = (props) => {

  const [state, dispatch] = useReducer(noteReducer, initialState);

  useEffect(()=> {
    getNotes()
  }, [])


  function getNotes(){
    axios.get('http://localhost:4000/api/notes')
    .then(response => {
      dispatch({type: 'GET_NOTES', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'SET_ERROR'})
    })
  }


  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NoteContext.Provider>
  );
}
 
 
export default NoteContextProvider;