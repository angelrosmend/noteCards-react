const generateRandomId = () => Math.floor(Math.random() * 1000000)

export const initialState = {
    loading: true,
    error: '',
    notes: []
}
export const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [{...state},{
            title: action.note.title,
            description: action.note.description,
            id: generateRandomId()
        }]
        case 'GET_NOTES':
            return [{
                loading: false,
                notes: action.payload,
                error: ''
            }]
        case 'SET_NOTES':
            return {
                ...state
            }
        case 'EDIT_NOTE':
        case 'REMOVE_NOTE':
            return state.filter(note => note.id !== action.id)

        case 'SET_ERROR':
            return {
                loading: false,
                notes: [],
                error: 'Something went wrong'
            }
        default:
          return state
    }
}