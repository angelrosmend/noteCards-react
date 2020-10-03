const generateRandomId = () => Math.floor(Math.random() * 1000000)

export const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state,{
            title: action.note.title,
            description: action.note.description,
            id: generateRandomId()
        }]
        case 'GET_NOTE':
            return state.filter(note => note.id === action.id)
        case 'EDIT_NOTE':
        case 'REMOVE_NOTE':
            return state.filter(note => note.id !== action.id)
        default:
          return state
    }
}