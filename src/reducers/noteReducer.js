import {generateRandomId} from '../contexts/NoteContext'

export const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state,{
            title: action.note.title,
            description: action.note.description,
            id: generateRandomId()
        }]
        case 'REMOVE_NOTE':
            return state.filter(note => note.id !== action.id)
    
        default:
          return state
    }
}