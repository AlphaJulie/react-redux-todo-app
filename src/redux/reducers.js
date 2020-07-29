
import { ADD_TODO, DELETE_TODO } from './actionTypes'

const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'Work 1',
            completed: false
        }
    }
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case DELETE_TODO:{
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


