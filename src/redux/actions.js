import { ADD_TODO, DELETE_TODO } from './actionTypes'

export const addTodo = (content) => (
    {
        type: ADD_TODO,
        payload: {
            content
        }
    }
)

export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
)



